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
      <div className={`backdrop-blur-xl rounded-2xl border shadow-xl p-4 max-w-xs transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-600/40'
          : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/60'
      }`}>
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`text-sm font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}>
              Now Live
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
        <div className="space-y-2">
            {/* Project Interest Form */}
            <a
              href="https://forms.gle/BBPjhvF7LNa4QnUb9"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-orange-600/15 to-red-600/15 border border-orange-500/25 hover:border-orange-400/40 hover:from-orange-600/20 hover:to-red-600/20'
                  : 'bg-gradient-to-r from-orange-50/80 to-red-50/80 border border-orange-200/60 hover:border-orange-300/80 hover:from-orange-100/90 hover:to-red-100/90'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-orange-200' : 'text-orange-800'
                    }`}>
                      Project Interest Form
                    </span>
                    <div className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      Due 10/5
                    </div>
                  </div>
                  <p className={`text-xs mt-0 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Join existing projects
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Project Submissions */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe5vEY6zOWMD27WjcWCJunCdfU_DXuZ6leevE3Lse9DiNQOcg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-blue-500/25 hover:border-blue-400/40 hover:from-blue-600/20 hover:to-purple-600/20'
                  : 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-200/60 hover:border-blue-300/80 hover:from-blue-100/90 hover:to-purple-100/90'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
                  }`}>
                    Submit Project Ideas
                  </span>
                  <p className={`text-xs mt-0 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Share your AI project concepts
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Board Positions */}
            <a
              href="https://forms.gle/Foggqs5CKXeGpvJA8"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600/15 to-pink-600/15 border border-purple-500/25 hover:border-purple-400/40 hover:from-purple-600/20 hover:to-pink-600/20'
                  : 'bg-gradient-to-r from-purple-50/80 to-pink-50/80 border border-purple-200/60 hover:border-purple-300/80 hover:from-purple-100/90 hover:to-pink-100/90'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-purple-200' : 'text-purple-800'
                  }`}>
                    Join Board Positions
                  </span>
                  <p className={`text-xs mt-0 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Apply for leadership roles
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Learning Program */}
            <a
              href="https://docs.google.com/forms/u/2/d/161s40B9v8Djj9aUdhQyh0JA6WbtJRcv79RSTFyFZef0/edit?usp=forms_home&ouid=103668262152487449598&ths=true"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-green-600/15 to-emerald-600/15 border border-green-500/25 hover:border-green-400/40 hover:from-green-600/20 hover:to-emerald-600/20'
                  : 'bg-gradient-to-r from-green-50/80 to-emerald-50/80 border border-green-200/60 hover:border-green-300/80 hover:from-green-100/90 hover:to-emerald-100/90'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-green-200' : 'text-green-800'
                  }`}>
                    Learning Program
                  </span>
                  <p className={`text-xs mt-0 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Register for AI education
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 -right-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.2s'}}></div>
      </div>
    </div>
  );
}
