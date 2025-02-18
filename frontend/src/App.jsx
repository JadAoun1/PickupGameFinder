import { useContext, useState, useEffect } from "react";
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

  // Persist sidebar state if user is logged in
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (user) {
      const savedState = localStorage.getItem("sidebarOpen");
      return savedState ? JSON.parse(savedState) : false;
    }
    return false;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen));
    }
  }, [isSidebarOpen, user]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {user ? (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      ) : (
        <Navbar />
      )}

      {/* Remove the left margin so that content spans the full width */}
      <main className="flex-1 w-full transition-all duration-300 px-0">
        <Routes>
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
      </main>
    </div>
  );
}
