'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function FloatingNotification() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed z-40 transition-all duration-500 ${
      isScrolled ? 'top-24 right-6' : 'top-28 right-6'
    }`}>
      <div className={`backdrop-blur-xl rounded-2xl border shadow-lg p-4 max-w-sm transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900/90 border-gray-700/50'
          : 'bg-white/90 border-gray-200/50'
      }`}>
        {/* Header with close button */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`text-sm font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}>
              Now Open
            </span>
          </div>
          <button
            onClick={handleClose}
            className={`p-1 rounded-full transition-colors duration-200 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className={`text-sm font-medium transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Applications & Projects Open
          </h3>
          
          <div className="space-y-2">
            {/* Project Submissions */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe5vEY6zOWMD27WjcWCJunCdfU_DXuZ6leevE3Lse9DiNQOcg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-400/50'
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  Submit Project Ideas
                </span>
              </div>
            </a>

            {/* Board Positions */}
            <a
              href="https://forms.gle/Foggqs5CKXeGpvJA8"
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-400/50'
                  : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Join Board Positions
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 -right-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.2s'}}></div>
      </div>
    </div>
  );
}
