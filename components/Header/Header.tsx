"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-100 text-gray-800">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-blue-900">
            <img
              src="./royaalmede_logo.png"
              className="w-[200px]"
              alt="Royaalmede Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-base font-medium hover:text-blue-900">
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-medium hover:text-blue-900"
          >
            About
          </Link>
          <Link
            href="/loans"
            className="text-base font-medium hover:text-blue-900"
          >
            Royaalmede Loan
          </Link>
          <Link
            href="/#testimonials"
            className="text-base font-medium hover:text-blue-900"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="text-base font-medium hover:text-blue-900"
          >
            Contact
          </Link>
          <Link
            href="/career"
            className="text-base font-medium hover:text-blue-900"
          >
            Career
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/loans"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            Loan Solutions
          </Link>
          <Link
            href="/#testimonials"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/career"
            className="block text-sm font-medium hover:text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            Career
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
