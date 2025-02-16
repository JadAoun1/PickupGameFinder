const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User"); 
const Game = require("./models/Game");

// ----- AUTH MIDDLEWARE -----
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const cleanToken = token.replace("Bearer ", "");
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ----- JWT HELPER -----
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// =======================
//   SAMPLE / HOME ROUTE
// =======================
router.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

// =======================
//  AUTH ROUTES
// =======================

// Signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = generateToken(newUser);
    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// =======================
//   PROTECTED ROUTES
// =======================

// Profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

// =======================
//   GAME CRUD ROUTES
// =======================

/**
 * CREATE a new Game
 * POST /games
 * Protected route: must be logged in.
 */
router.post("/games", authenticate, async (req, res) => {
  try {
    const { title, location, date, playersNeeded } = req.body;

    const newGame = new Game({
      title,
      location,
      date,
      playersNeeded,
      creatorId: req.user.id, // from JWT payload
    });

    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    console.error("Create game error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * READ ALL Games
 * GET /games
 * Public: anyone can view all games.
 */
router.get("/games", async (req, res) => {
  try {
    const games = await Game.find().sort({ date: 1 });
    res.json(games);
  } catch (err) {
    console.error("Get games error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * READ ONE Game by ID
 * GET /games/:id
 * Public route (or protect it if you prefer).
 */
router.get("/games/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).populate("playersJoined", "username email");
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
  } catch (err) {
    console.error("Get game error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * UPDATE a Game
 * PUT /games/:id
 * Protected route: only creator can edit
 */
router.put("/games/:id", authenticate, async (req, res) => {
  try {
    const { title, location, date, playersNeeded } = req.body;
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    // Check if the logged-in user is the creator
    if (game.creatorId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to edit this game" });
    }

    // Update fields
    if (title) game.title = title;
    if (location) game.location = location;
    if (date) game.date = date;
    if (playersNeeded !== undefined) game.playersNeeded = playersNeeded;

    const updatedGame = await game.save();
    res.json(updatedGame);
  } catch (err) {
    console.error("Update game error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * DELETE a Game
 * DELETE /games/:id
 * Protected route: only creator can delete
 */
router.delete("/games/:id", authenticate, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    // Check if the logged-in user is the creator
    if (game.creatorId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this game" });
    }

    await game.remove();
    res.json({ message: "Game deleted successfully" });
  } catch (err) {
    console.error("Delete game error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * JOIN a Game
 * POST /games/:id/join
 * Protected route: user must be logged in to join
 */
router.post("/games/:id/join", authenticate, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    // Check if user is already joined
    if (game.playersJoined.includes(req.user.id)) {
      return res.status(400).json({ message: "You already joined this game" });
    }

    game.playersJoined.push(req.user.id);
    const updatedGame = await game.save();
    res.json(updatedGame);
  } catch (err) {
    console.error("Join game error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// =======================
// OTHER PROTECTED ROUTES
// (Settings, My Games, etc.)
// =======================
router.get("/my-games", authenticate, (req, res) => {
  res.json({ message: "User's Hosted & Joined Games (Requires Auth)" });
});

router.put("/settings", authenticate, (req, res) => {
  res.json({ message: "Update User Settings (Requires Auth)" });
});

router.get("/messages", authenticate, (req, res) => {
  res.json({ message: "User Messages (Requires Auth)" });
});


module.exports = router;
