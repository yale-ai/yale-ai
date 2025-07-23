'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 w-full">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Always visible */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-semibold text-black hover:text-gray-700 transition-colors duration-200">
                Yale AI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-black hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-black hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/education"
                  className="text-black hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Education
                </Link>
                <Link
                  href="/team"
                  className="text-black hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Team
                </Link>


              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-black hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-6 pt-2 pb-6 space-y-2 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="text-black hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-black hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-black hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/education"
                className="text-black hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 