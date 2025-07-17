import React from 'react'

const projects = [
  { src: '/assets/5.projects/image1.png', col: 'col-span-1', row: 'row-span-1' },
  { src: '/assets/5.projects/image3.png', col: 'md:col-span-1', row: 'md:row-span-2' },
  { src: '/assets/5.projects/image5.png', col: 'col-span-1', row: 'row-span-1' },
  { src: '/assets/5.projects/image2.png', col: 'md:col-span-1', row: 'md:row-span-2' },
  { src: '/assets/5.projects/image6.png', col: 'md:col-span-1', row: 'md:row-span-2' },
  { src: '/assets/5.projects/image4.png', col: 'col-span-1', row: 'row-span-1' },
]

const OurProjects = () => {
  return (
    <section className="bg-[#f9f9fc] py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          A project is a single or team activity, combining research and design with best effort. Here are some of our team’s projects.
        </p>

        <div className="bg-white rounded-3xl p-6 md:p-10 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-full h-full ${project.col} ${project.row}`}
            >
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

<div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] hover:from-[#6C63FF] hover:to-[#A18CD1] transition">
  <button className="px-6 py-2 w-full h-full bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition">
    View Full Team
  </button></div>
      </div>
    </section>
  )
}

export default OurProjects
