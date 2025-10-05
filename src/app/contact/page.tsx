'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Contact</h1>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>We&apos;d love to hear from you</p>
        </div>

        <div className="mx-auto max-w-2xl space-y-8">
          <div className={`backdrop-blur-xl rounded-2xl p-6 shadow-xl border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-900/80 border-gray-700/30'
              : 'bg-white/80 border-gray-200/30'
          }`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className={`text-xl font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Email</h2>
                <a href="mailto:yaleaiassociation@gmail.com" className="text-blue-600 hover:text-blue-700 break-all">yaleaiassociation@gmail.com</a>
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-xl rounded-2xl p-6 shadow-xl border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-900/80 border-gray-700/30'
              : 'bg-white/80 border-gray-200/30'
          }`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className={`text-xl font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Reach out to Team</h2>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <a href="mailto:ananya.krishna@yale.edu" className={`hover:text-blue-700 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>ananya.krishna@yale.edu</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <a href="mailto:lukass.kellijs@yale.edu" className={`hover:text-blue-700 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>lukass.kellijs@yale.edu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://forms.gle/7B4De3w5aXXvn1h1A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Join the mailing list
            </a>
            <a
              href="https://forms.gle/BZ6JD2kKNVzFVEYc7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Give Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


