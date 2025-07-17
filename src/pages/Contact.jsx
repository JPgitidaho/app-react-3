import React from 'react'
import { FaUser, FaEnvelope, FaPen, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <section className="bg-[#f9f9fc] py-24 px-6 md:px-24 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-20">Contact Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        <div className="bg-white/20 rounded-3xl shadow-md p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3">
            <FaUser className="text-gray-400" />
            <input type="text" placeholder="Write your name" className="w-full bg-transparent outline-none text-gray-700" />
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3">
            <FaEnvelope className="text-gray-400" />
            <input type="email" placeholder="Write your email" className="w-full bg-transparent outline-none text-gray-700" />
          </div>
          <div className="flex items-start gap-3 bg-gray-50 rounded-3xl px-4 py-3">
            <FaPen className="text-gray-400 mt-1" />
            <textarea rows="4" placeholder="Write your message" className="w-full bg-transparent outline-none text-gray-700 resize-none" />
          </div>
          <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 text-white font-medium">
            Submit
          </button>
        </div>

        <div className="flex flex-col justify-center gap-8 ">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-purple-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+880124332334</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">something@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">
                43/A Spooner Street,<br />
                St laurence, Virginia,<br />
                Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/7.contact/image1.png"
        alt=""
        className="absolute right-0 top-[410px] -translate-y-1/2 w-[70%] h-[70%] md:block z-0"
      />
    </section>
  )
}

export default ContactUs
