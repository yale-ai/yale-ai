'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-8 sm:py-12 px-4 sm:px-6 transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {/* Organization Name - Left Aligned */}
          <div className={`font-semibold text-lg sm:text-xl leading-tight transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <div>Yale Artificial</div>
            <div>Intelligence Association</div>
          </div>

          {/* Social Media Section - Center Aligned */}
          <div className="flex flex-col items-center space-y-3 order-2 sm:order-none">
            {/* Find us on text */}
            <div className={`text-sm sm:text-md transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
            }`}>
              Find us on
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              {/* GitHub */}
              <Link href="https://github.com/yale-ai" className={`hover:text-fuchsia-900 transition-colors duration-200 transform hover:scale-110 ${
                theme === 'dark' ? 'text-gray-400 hover:text-fuchsia-400' : 'text-gray-700'
              }`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/yale-ai-association/" className={`hover:text-blue-600 transition-colors duration-200 transform hover:scale-110 ${
                theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700'
              }`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/yale_ai/" className={`hover:text-pink-600 transition-colors duration-200 transform hover:scale-110 ${
                theme === 'dark' ? 'text-gray-400 hover:text-pink-400' : 'text-gray-700'
              }`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM16.25 3.5h-8.5a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-2.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/yaleaiassociation/" className={`hover:text-blue-700 transition-colors duration-200 transform hover:scale-110 ${
                theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700'
              }`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Contact Us - Right Aligned */}
          <div className={`text-sm sm:text-md text-right transition-colors duration-300 order-3 sm:order-none ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
          }`}>
            <Link href="/contact" className={`hover:text-blue-700 transition-colors duration-200 ${
              theme === 'dark' ? 'hover:text-blue-400' : ''
            }`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Required Disclaimer */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
        <p className={`text-xs text-center transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          The Yale Artificial Intelligence Association is a registered student organization. This website is maintained by the student organization and does not represent the views of Yale University.
        </p>
      </div>
    </footer>
  );
} 