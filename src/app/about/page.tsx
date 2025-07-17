export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              About{' '}
              <span className="text-red-600">Yale</span> AI Club
            </h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Yale AI Club is the premier AI organization at Yale University. We are dedicated to fostering 
                an inclusive and vibrant community for students interested in artificial intelligence. We aim 
                to provide all students from established AI researchers to folks wanting to get into the field 
                with the knowledge and opportunity to engage with AI research & development. Our vision is 
                to serve as a centralized hub for the AI community on campus, connecting everyone from 
                domain experts and practitioners to theorists.
              </p>
              
              <p>
                We offer a wide range of activities such as student-led research projects, reading groups, 
                workshops, and classes designed to equip members with essential AI skills.
              </p>
              
              <p>
                We also engage with non-profit organizations with the shared vision of democratizing AI 
                and reducing global inequalities. By hosting small-group discussions and lectures with 
                leading experts, the club provides invaluable networking and learning 
                opportunities for students passionate about AI.
              </p>
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="w-full h-48 bg-gradient-to-br from-lime-300 to-lime-400 rounded-3xl flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-1/2 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full h-64 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-3xl flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 