import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateGamePage from "./pages/CreateGamePage";
import MyGamesPage from "./pages/MyGamesPage";
import SettingsPage from "./pages/SettingsPage";
import MessagesPage from "./pages/MessagesPage";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    // Outer container now takes full viewport width and height
    <div className="flex flex-col min-h-screen w-full">
      {user ? <Sidebar /> : <Navbar />}
      {/* The main area adjusts based on whether the sidebar is visible */}
      <main className={`flex-1 w-full transition-all duration-300 ${user ? "ml-64" : ""}`}>
        {/* This common wrapper ensures that each routed page spans the full width */}
        <div className="w-full">
          <Routes>
            {/* Render Dashboard if user is logged in, otherwise HomePage */}
            <Route path="/" element={user ? <Dashboard /> : <HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            {user && (
              <>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-game" element={<CreateGamePage />} />
                <Route path="/my-games" element={<MyGamesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/messages" element={<MessagesPage />} />
              </>
            )}
          </Routes>
        </div>
      </main>
    </div>
  );
}
