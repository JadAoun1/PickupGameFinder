import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"; // default import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(jwt_decode(token));
    }
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(jwt_decode(res.data.token));
  };

  const signup = async (username, email, password) => {
    const res = await axios.post(`${API_URL}/signup`, { username, email, password });
    localStorage.setItem("token", res.data.token);
    setUser(jwt_decode(res.data.token));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
