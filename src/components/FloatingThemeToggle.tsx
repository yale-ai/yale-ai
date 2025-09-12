'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-6 z-50 transition-all duration-300 ${
      isScrolled ? 'top-5' : 'top-6'
    }`}>
      <button
        onClick={toggleTheme}
        className={`rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isScrolled ? 'p-3' : 'p-4'
        } ${
          theme === 'dark'
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-yellow-300 shadow-gray-900/50'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-gray-900/20'
        } border-2 ${
          theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
        }`}
        aria-label="Toggle dark mode"
      >
        <svg className={`transition-all duration-300 ${
          isScrolled ? 'w-5 h-5' : 'w-6 h-6'
        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {theme === 'dark' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          )}
        </svg>
      </button>
    </div>
  );
}
