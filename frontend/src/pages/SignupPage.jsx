import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import basketball5 from "../assets/homepage/basketball5.jpg";
// Import your logos
import HoopsConnectLogo from "../assets/HoopsConnect.svg";
import HoopsConnectWhite from "../assets/HoopsConnectWhite.svg";

export default function SignupPage() {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signup(formData.username, formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen font-main">
      {/* Left Column: Form Container */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24">
        {/* Wrap the form content in a container with a downward translation */}
        <div className="mx-auto w-full max-w-sm lg:w-96 transform translate-y-8">
          <div className="text-center">
            {/* Replace Tailwind logo with your main logo */}
            <img
              alt="HoopsConnect Logo"
              src={HoopsConnectLogo}
              className="mx-auto h-32 w-auto"
            />
            <h2 className="mt-0 text-2xl font-bold tracking-tight text-black">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-grey-text">
              Join our community and experience the ultimate connection in
              basketball.
            </p>
          </div>
          <form onSubmit={handleSignup} className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-black px-3 py-2 shadow-sm placeholder-grey-text focus:outline-none focus:border-main focus:ring focus:ring-main transition-colors duration-200 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-black px-3 py-2 shadow-sm placeholder-grey-text focus:outline-none focus:border-main focus:ring focus:ring-main transition-colors duration-200 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-black px-3 py-2 shadow-sm placeholder-grey-text focus:outline-none focus:border-main focus:ring focus:ring-main transition-colors duration-200 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-black"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-black px-3 py-2 shadow-sm placeholder-grey-text focus:outline-none focus:border-main focus:ring focus:ring-main transition-colors duration-200 sm:text-sm"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-main py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
          {/* Social Login Section */}
          <div className="mt-10">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-grey-text/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-black">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {/* Google Button */}
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-grey-text bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-grey-text/10"
              >
                <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.9 0 7.4 1.4 10.1 3.8l7.2-7.2C35.6 2.7 30.2 0 24 0 14.4 0 6.3 5.3 3.3 13l7 5.4C12.2 16.2 17.6 12 24 12z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.2 24c0-1.5-.1-2.9-.4-4.3H24v8.2h12.6c-.5 2.6-2.2 4.8-4.6 6.3l7 5.4C44.2 35.5 46.2 30.1 46.2 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.3 28.2c-.8-2.3-1.3-4.8-1.3-7.3s.5-5 .9-7.3L3.3 8.2C1.2 11.3 0 15.2 0 19.5s1.2 8.2 3.3 11.3l7-5.4z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.2 0 11.4-2 15.2-5.4l-7-5.4c-2 1.4-4.5 2.3-8.2 2.3-6.4 0-11.8-4.3-13.7-10l-7 5.4C6.3 42.7 14.4 48 24 48z"
                  />
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </a>
              {/* GitHub Button */}
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-grey-text bg-white py-2 px-4 text-sm font-semibold text-black shadow-sm hover:bg-grey-text/10"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 10.017C22 4.484 17.523 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold">GitHub</span>
              </a>
            </div>
            <p className="mt-10 text-center text-sm text-grey-text">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-main hover:text-main/90"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Right Column: Background Image (visible on large screens) */}
      <div className="relative hidden flex-1 lg:block">
              <img
                alt="Signup Background"
                src={basketball5}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Overlay with primary color */}
              <div className="absolute inset-0 bg-main opacity-80"></div>
              {/* White Logo centered */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <img
                  alt="HoopsConnect White Logo"
                  src={HoopsConnectWhite}
                  className="h-128 w-auto"
                />
              </div>
            </div>
    </div>
  );
}
