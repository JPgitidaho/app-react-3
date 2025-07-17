import React from 'react'

const features = [
  {
    icon: '/assets/4.features/icon1.png',
    title: 'Encrypted Mail',
    description: 'A process of encrypting email communications.',
  },
  {
    icon: '/assets/4.features/icon2.png',
    title: 'Display Sharing',
    description: 'With other participants, you may share your screen.',
  },
  {
    icon: '/assets/4.features/icon3.png',
    title: 'Private Notebook',
    description: 'Private Notebook is an application that is protected.',
  },
  {
    icon: '/assets/4.features/icon4.png',
    title: 'App App Assistance',
    description: 'App Assistant is quickly and efficiently run the system.',
  },
  {
    icon: '/assets/4.features/icon5.png',
    title: 'Multiple Printing',
    description: 'Our canvas prints are crafted on top-notch canvas.',
  },
  {
    icon: '/assets/4.features/icon6.png',
    title: 'Free Sketch',
    description: 'Our canvas prints are crafted on top-notch canvas.',
  },
]

const Features = () => {
  return (
<section className="relative w-full py-24 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(at_bottom_right,_rgba(255,182,193,0.2),_transparent_60%),radial-gradient(at_bottom_left,_rgba(142,197,252,0.2),_transparent_60%),radial-gradient(at_top_right,_rgba(144,238,144,0.2),_transparent_60%)]"></div>
    <div className="max-w-6xl text-center mx-15">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          We provide a number of excellent features that will undoubtedly improve the user experience.
          We also provide a better support system.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 ">
              <img src={item.icon} alt={item.title} className="w-20 h-20" />
              <h3 className="font-semibold text-lg text-gray-800 ">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
