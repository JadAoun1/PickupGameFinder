import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HoopsConnectLogo from "../assets/HoopsConnect.svg";

export default function Navbar() {
  const mobileMenuRef = useRef(null);
  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow font-main">
      <div className="flex items-center h-16 px-6 lg:px-8">
        {/* Left: Brand */}
        <div className="w-1/3 flex items-center">
          <Link to="/" className="p-1.5">
            <img
              src={HoopsConnectLogo}
              alt="HoopsConnect Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="w-1/3 hidden lg:flex justify-center">
          <nav className="flex space-x-16">
            <HashLink
              smooth
              to="/#home"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#features"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              Features
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              Contact
            </HashLink>
          </nav>
        </div>

        {/* Right: Log In / Sign Up and Mobile Menu Button */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-lg font-semibold text-black transition-colors duration-300 hover:text-main"
            >
              Sign Up
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2.5 text-grey-text"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="p-1.5">
            <img
              src={HoopsConnectLogo}
              alt="HoopsConnect Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 rounded-md p-2.5 text-grey-text"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6">
          <nav className="space-y-4">
            <HashLink
              smooth
              to="/#home"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#features"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              Features
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              Contact
            </HashLink>
          </nav>
          <div className="mt-4 flex flex-col space-y-4">
            <Link
              to="/login"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={toggleMobileMenu}
              className="block text-lg font-semibold text-black transition-colors duration-300 hover:text-main p-2 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
