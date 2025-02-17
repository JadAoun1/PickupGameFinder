import { useRef } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white shadow">
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo at top-left */}
          <Link to="/" className="p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
              alt="Basketball Logo"
            />
          </Link>

          {/* Center nav links */}
          <nav className="hidden lg:flex space-x-16">
            <Link to="/" className="hover:underline text-lg font-semibold text-gray-900">
              Home
            </Link>
            <Link to="/about" className="hover:underline text-lg font-semibold text-gray-900">
              About
            </Link>
            <Link to="/marketplace" className="hover:underline text-lg font-semibold text-gray-900">
              Marketplace
            </Link>
            <Link to="/company" className="hover:underline text-lg font-semibold text-gray-900">
              Company
            </Link>
          </nav>

          {/* Login/Sign Up (desktop) and mobile menu button */}
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Link to="/login" className="hover:underline text-lg font-semibold text-gray-900">
                Log In or Sign Up <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
              alt="Basketball Logo"
            />
          </Link>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6">
          <nav className="space-y-4">
            <Link to="/" className="block text-lg font-semibold text-gray-900 hover:bg-gray-100 p-2 rounded-md" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/about" className="block text-lg font-semibold text-gray-900 hover:bg-gray-100 p-2 rounded-md" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/marketplace" className="block text-lg font-semibold text-gray-900 hover:bg-gray-100 p-2 rounded-md" onClick={toggleMobileMenu}>
              Marketplace
            </Link>
            <Link to="/company" className="block text-lg font-semibold text-gray-900 hover:bg-gray-100 p-2 rounded-md" onClick={toggleMobileMenu}>
              Company
            </Link>
          </nav>
          <div className="mt-4">
            <Link to="/login" className="block text-lg font-semibold text-gray-900 hover:bg-gray-100 p-2 rounded-md" onClick={toggleMobileMenu}>
              Log In or Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
