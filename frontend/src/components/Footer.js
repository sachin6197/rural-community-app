import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg">Rural Essentials</h4>
          <p className="mt-2 text-sm">Helping rural communities access essentials with ease.</p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">Village Market Road, Block A</p>
          <p className="text-sm">Helpline: +91 98765 43210</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="bg-teal-700 text-white text-center py-3">
        <small>© {new Date().getFullYear()} Rural Essentials. All rights reserved.</small>
      </div>
    </footer>
  );
}
