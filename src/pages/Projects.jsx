import React from 'react'

const OurProjects = () => {
  return (
    <section className="bg-[#f9f9fc] py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          A project is a single or team activity, combining research and design with best effort. Here are some of our team’s projects.
        </p>
        <div
          className="bg-white rounded-3xl p-6 md:p-10 mb-12 grid gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 250px)',
          }}
        >
          <div style={{ gridColumn: '1', gridRow: '1' }}>
            <img src="/assets/5.projects/image1.png" alt="1" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div style={{ gridColumn: '2', gridRow: '1 / span 2' }}>
            <img src="/assets/5.projects/image3.png" alt="2" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div style={{ gridColumn: '3', gridRow: '1' }}>
            <img src="/assets/5.projects/image5.png" alt="3" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div style={{ gridColumn: '1', gridRow: '2 / span 2' }}>
            <img src="/assets/5.projects/image2.png" alt="4" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div style={{ gridColumn: '3', gridRow: '2 / span 2' }}>
            <img src="/assets/5.projects/image6.png" alt="5" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div style={{ gridColumn: '2', gridRow: '3 ' }}>
            <img src="/assets/5.projects/image4.png" alt="6" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        <button className="px-6 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition">
          View More
        </button>
      </div>
    </section>
  )
}

export default OurProjects
