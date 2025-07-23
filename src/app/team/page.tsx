import Image from "next/image";

export default function Team() {
  const executiveBoard = [
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=LL"
    },
    {
      name: "Name, Last Name",
      role: "Position", 
      image: "https://via.placeholder.com/300x300/7C3AED/FFFFFF?text=RF"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/059669/FFFFFF?text=JP"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/DC2626/FFFFFF?text=DW"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/EA580C/FFFFFF?text=AC"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/DB2777/FFFFFF?text=SS"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/2563EB/FFFFFF?text=CP"
    },
    {
      name: "Name, Last Name",
      role: "Position",
      image: "https://via.placeholder.com/300x300/7C2D12/FFFFFF?text=SC"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Executive Board Section */}
        <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="text-red-600">Team</span>
            </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The people working to get Yale AI off the ground.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveBoard.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto">
                <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
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
          <h2 className="text-3xl font-bold text-black mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in joining Yale AI? We're always looking for passionate students 
            who want to explore the frontiers of artificial intelligence.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
} 