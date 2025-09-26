import React from "react";
import { FaArrowRight } from "react-icons/fa6"; // Assuming you have react-icons installed

export default function Hero() {
  return (
    <section className=" relative flex flex-col lg:flex-row items-center justify-between h-screen bg-gray-50 overflow-hidden">
      {/* Left Content Area */}
      <div className="lg:relative absolute top-40 lg:top-0 z-10 w-full lg:w-1/2 p-6 md:p-12 lg:pl-24 lg:py-20 flex flex-col justify-center text-center lg:text-left">
        {/* Decorative Flowers - Left */}
        <div className="absolute -left-5  top-1/2 -translate-y-1/2 lg:top-50 lg:bottom-0 lg:left-0 opacity-80 lg:opacity-100 z-0">
          {/* Replace with your actual flower image or SVG */}
          {/* This is a placeholder for the flower image on the left side */}
          <img
            src="flowerbg.png" // Placeholder image URL
            alt="Decorative Flowers"
            className="w-24 lg:w-24  lg:object-cover" // Adjust size and rotation as needed
          />
        </div>

        <p className="text-lg text-gray-800 mb-4 z-10">— Hello and Welcome,</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 z-10">
          Plan Your <br />
          <span className="text-orange-600">Dream Wedding</span> <br />
          With
        </h1>
        <p className="text-base md:text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0 z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis
          tincidunt.
        </p>

        {/* Book for Consult Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center space-x-3 px-8 py-3 bg-[#D1F0B1] text-black font-bold uppercase shadow-lg rounded-tl-3xl rounded-br-3xl
             transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[5px_10px_0px_0px_rgba(0,0,0,1)] max-w-fit mx-auto lg:mx-0 z-10"
        >
          <span>Book for Consult</span>
          <FaArrowRight className="text-3xl bg-black text-white p-1 rounded-tl-xl rounded-br-xl" />
        </a>
      </div>

      {/* Right Image Area */}
      <div className="absolute lg:hidden">
        <img
          src="Heroimg.png"
          alt=""
          className="h-screen md:w-240 w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/0 lg:from-white lg:via-white/80 lg:to-transparent"></div>
      </div>
      <div className="hidden lg:block">
        <img src="Heroimg.png" alt="" className="object-cover w-full" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/0 lg:from-white lg:via-white/80 lg:to-transparent"></div>
      </div>
    </section>
  );
}
