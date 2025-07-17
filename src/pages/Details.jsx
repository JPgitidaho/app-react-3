import React from 'react'

const Details = () => {
  return (
    <section className="relative py-24 mx-20 md:px-16">
      <img src="/assets/3.details/illustration1.png" className="absolute top-[25%] left-0 w-80  z-0" alt="" />
      <img src="/assets/3.details/illustration2.png" className="absolute bottom-[25%] right-0 w-80 z-0" alt="" />
      <div className="relative max-w-6xl mx-auto space-y-32 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/assets/3.details/illustration3.png" alt="UI/UX" className="relative z-30" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A creative team which builds stunning UI/UX
            </h2>
            <p className="text-gray-600 mb-6">
              Today, I’d like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.
            </p>
            <p className="text-gray-600 mb-6">
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong>.
            </p>
            <a href="#" className="inline-block px-5 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition">
              Read More
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Devoted to defining the cutting edge
            </h2>
            <p className="text-gray-600 mb-6">
              “This new creation is cutting-edge technology,” says the researcher, “whose study originates from a business at the forefront of space science.”
            </p>
            <p className="text-gray-600 mb-6">
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong>.
            </p>
            <a href="#" className="inline-block px-5 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition">
              Read More
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src="/assets/3.details/illustration6.png" alt="Cutting Edge" className=" relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
