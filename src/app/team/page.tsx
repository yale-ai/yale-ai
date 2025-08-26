

export default function Team() {
  const executiveBoard = [
    {
      name: "Ananya Krishna",
      role: "Co-President",
      image: ""
    },
    {
      name: "Lukass Kellijs",
      role: "Co-President",
      image: ""
    },
    {
      name: "Aryan Agarwal",
      role: "Vice President and Treasurer",
      image: ""
    },
    {
      name: "Helen",
      role: "Vice President and Secretary",
      image: ""
    },
    {
      name: "Raymond Hou",
      role: "Vice President and Project Director",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Executive Board Section */}
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-lg text-gray-500 font-medium">The people working to get Yale AI off the ground</p>
            </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveBoard.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto">
                <div className="w-44 h-44 mx-auto rounded-2xl overflow-hidden border-4 border-gray-200/30 group-hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Add a section for general members or other team categories */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in joining Yale AI? We&apos;d be very happy to hear from you!
          </p>
          <a 
            href="https://yaleconnect.yale.edu/yaia/home/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-block"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
} 