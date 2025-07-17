import React from 'react'

const team = [
  {
    name: 'John Adams',
    role: 'CEO',
    image: '/assets/6.team/image1.png',
    bg: 'from-[#B7C0FF] to-[#0085FF]',
  },
  {
    name: 'Carrey Johnson',
    role: 'Senior Developer',
    image: '/assets/6.team/image2.png',
    bg: 'from-[#E9B5FF] to-[#C644FC]',
  },
  {
    name: 'Ray Marie',
    role: 'Developer',
    image: '/assets/6.team/image3.png',
    bg: 'from-[#B7C0FF] to-[#0085FF]',
  },
  {
    name: 'Austin Min',
    role: 'Designer',
    image: '/assets/6.team/image4.png',
    bg: 'from-[#E9B5FF] to-[#C644FC]',
  },
]

const OurTeam = () => {
  return (
    <section className="bg-[#f9f9fc] py-24 px-6 md:px-24 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {team.map((person, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className={`absolute -bottom-2 -right-2 w-full h-full rounded-[40px] bg-gradient-to-br ${person.bg}`}></div>
                <img
                  src={person.image}
                  alt={person.name}
                  className="relative z-10 w-full rounded-[40px] object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mt-4">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
        <button className="px-6 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition">
          View Full Team
        </button>
      </div>
    </section>
  )
}

export default OurTeam
