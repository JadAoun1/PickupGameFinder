require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

// Mount API routes under /api
app.use("/api", routes);

// Serve static files from the built React app folder (assuming it's in frontend/dist)
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));


// Catch-all route: serve index.html for all requests not starting with /api
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
