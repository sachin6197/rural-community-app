import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-teal-700 text-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/assets/logo.svg" alt="logo" className="h-10" />
          </Link>
          <Link to="/" className="text-lg font-semibold hidden sm:inline-block">
            Rural Essentials
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/login" className="px-3 py-1 border border-white rounded">
            Login
          </Link>
          <Link to="/signup" className="px-3 py-1 bg-white text-teal-700 rounded">
            Sign up
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="sm:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-teal-600">
          <Link to="/" className="block px-4 py-3 border-b border-teal-500">
            Home
          </Link>
          <Link to="/services" className="block px-4 py-3 border-b border-teal-500">
            Services
          </Link>
          <Link to="/products" className="block px-4 py-3 border-b border-teal-500">
            Products
          </Link>
          <Link to="/contact" className="block px-4 py-3 border-b border-teal-500">
            Contact
          </Link>
          <div className="px-4 py-3 flex gap-3">
            <Link to="/login" className="flex-1 text-center border border-white rounded py-1">
              Login
            </Link>
            <Link to="/signup" className="flex-1 text-center bg-white text-teal-700 rounded py-1">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
