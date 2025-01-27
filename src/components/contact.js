import React from 'react'
import { CiMail } from 'react-icons/ci'

const Contact = () => {
  return (
    <section className="sm:px-3 text-black flex flex-col bg-[#4D869C] md:flex-row items-center justify-between gap-4 sm:gap-16 min-h-[60vh] sm:min-h-screen lg:px-20">
        <div className="max-w-[80vw] sm:max-w-[40vw] ml-2 "> 
          <h2 className="text-4xl lg:text-7xl sm:text-5xl rounded-xl font-bold font-sans">CONTACT</h2>
          <p className="text-xl sm:text-5xl">Got a problem to solve?</p>
          <p className=" text-sm sm:text-3xl">Get your suit ready and tell me <span className=" text-gray-400">your ideas to develop your dream website</span></p>
        </div>
        <div className="flex flex-col space-y-4 min-w-[40vw] ">
          <input type="text" placeholder="Your Name" className="px-4 py-2 border border-gray-300 rounded-md " />
          <input type="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded-md " />
          <textarea placeholder="Your Message" className="px-4 py-2 border border-gray-300 rounded-md"></textarea>
        <div className="flex flex-row items-center justify-between">  
        <button className="px-4 py-2 flex "><CiMail className="mr-1 pt-1 text-2xl"/> mailmewith@gmail.com</button>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-sky-200">Send Message</button>
          </div>
        </div>
      </section>
  )
}

export default Contact