import React from "react";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-semibold text-gray-900">
              <Link to='/'>Travel Budget Planning Tool</Link>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features">Features</a>
            <Link to="#about">About</Link>
            <Link to="#contact">Contact</Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
              <Link to='/login'>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
