'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        : 'pt-4'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Floating Bubble Container */}
        <div className={`transition-all duration-300 ${
          isScrolled
            ? 'py-2 px-4 sm:px-6 shadow-lg'
            : 'py-3 px-6 sm:px-8 shadow-2xl'
        } ${
          theme === 'dark' 
            ? 'bg-gray-900/95 backdrop-blur-xl border-gray-700/30' 
            : 'bg-white/95 backdrop-blur-xl border-gray-200/30'
        } rounded-full shadow-xl border`}>
          <div className="flex items-center justify-between w-full min-w-0 relative">
            {/* Left side - Brand */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className={`group inline-flex items-center ${
                  isScrolled ? 'px-5 py-2' : 'px-6 py-3'
                }`}
              >
                <span
                  className={`font-bold transition-all duration-300 ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  } ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200 group-hover:scale-105' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-cyan-500 group-hover:scale-105'
                  }`}
                >
                  Yale AI
                </span>
              </Link>
            </div>

            {/* Center - Navigation Menu - Absolutely positioned to center in entire navbar */}
            <div className="hidden xl:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/education"
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Education
              </Link>
              <Link
                href="/team"
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Team
              </Link>
            </div>

            {/* Right side - Theme Toggle, Contact, Join Us, and Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle, Contact, and Join Us - Only show on md+ screens */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Theme Toggle Button - More subtle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-200 hover:bg-opacity-80 flex-shrink-0 ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800/50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {theme === 'dark' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    )}
                  </svg>
                </button>

                <Link
                  href="/contact"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </Link>
                
                {/* Join Us Button */}
                <div className="relative flex-shrink-0">
                  <a
                    href="https://forms.gle/7B4De3w5aXXvn1h1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <span className="whitespace-nowrap">Join Us</span>
                  </a>
                  
                  {/* Minimal particle animations */}
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute top-1/2 -right-2 w-0.5 h-0.5 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.2s'}}></div>
                  <div className="absolute top-1/2 -left-2 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="xl:hidden">
                <button
                  onClick={toggleMenu}
                  className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full right-4 z-50 mt-2">
          <div className={`backdrop-blur-xl rounded-2xl px-4 py-3 space-y-1 border shadow-2xl transition-all duration-300 transform w-48 ${
            theme === 'dark'
              ? 'bg-gray-900/98 border-gray-600/30 shadow-gray-900/20'
              : 'bg-white/98 border-gray-200/30 shadow-gray-900/10'
          }`}>
            {/* Navigation Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                Home
              </Link>
              <Link
                href="/about"
                className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                About
              </Link>
              <Link
                href="/projects"
                className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                Projects
              </Link>
              <Link
                href="/education"
                className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                Education
              </Link>
              <Link
                href="/team"
                className={`group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'text-gray-200 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                Team
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 