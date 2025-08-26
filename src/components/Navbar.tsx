'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'pt-4'
        : 'pt-6'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Floating Bubble Container */}
        <div className={`bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-gray-200/30 transition-all duration-300 ${
          isScrolled
            ? 'py-2 px-6 shadow-lg'
            : 'py-4 px-8 shadow-2xl'
        }`}>
          <div className="flex justify-between items-center">

            {/* Left side - Brand */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className={`group inline-flex items-center ${
                  isScrolled ? 'px-5 py-2' : 'px-6 py-3'
                }`}
              >
                <span
                  className={`font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-cyan-700 transition-all duration-300 ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  }`}
                >
                  Yale AI
                </span>
              </Link>
            </div>

            {/* Center - Navigation Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                Projects
              </Link>
              <Link
                href="/education"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                Education
              </Link>
              <Link
                href="/team"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                Team
              </Link>
            </div>

            {/* Right side - Call to Action */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-50 rounded-full"
              >
                Contact
              </Link>
              {/* Join Us Button */}
              <a
                href="https://forms.gle/7B4De3w5aXXvn1h1A"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Join Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 pt-4 pb-6 space-y-2 border border-gray-200/50 shadow-lg">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/education"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {/* Mobile Join Us Button */}
              <a
                href="https://forms.gle/7B4De3w5aXXvn1h1A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg text-center"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 