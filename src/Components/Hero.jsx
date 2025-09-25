import React from "react";
import { FaArrowRight } from "react-icons/fa6"; // Assuming you have react-icons installed

export default function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-50 overflow-hidden">
      {/* Left Content Area */}
      <div className="relative z-10 w-full lg:w-1/2 p-6 md:p-12 lg:pl-24 lg:py-20 flex flex-col justify-center text-center lg:text-left">
        {/* Decorative Flowers - Left */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 lg:top-auto lg:bottom-0 lg:left-0 opacity-80 lg:opacity-100 z-0">
          {/* Replace with your actual flower image or SVG */}
          {/* This is a placeholder for the flower image on the left side */}
          <img
            src="https://via.placeholder.com/100x400/FFD700/FFFFFF?text=Flowers" // Placeholder image URL
            alt="Decorative Flowers"
            className="w-24 h-auto object-cover transform rotate-180" // Adjust size and rotation as needed
          />
        </div>

        <p className="text-lg text-gray-700 mb-4 z-10">— Hello and Welcome,</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 z-10">
          Plan Your <br />
          <span className="text-orange-600">Dream Wedding</span> <br />
          With
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis
          tincidunt.
        </p>

        {/* Book for Consult Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center lg:justify-start space-x-3 px-8 py-3 bg-green-600 text-white font-bold uppercase rounded-md shadow-lg
                     hover:bg-green-700 transition-colors duration-300 max-w-fit mx-auto lg:mx-0 z-10"
        >
          <span>Book for Consult</span>
          <FaArrowRight className="text-xl" />
        </a>
      </div>

      {/* Right Image Area */}
      <div
        className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/800x1200/cccccc/ffffff?text=Wedding+Couple')`,
        }}
      >
        {" "}
        {/* Placeholder image */}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/0 lg:from-white lg:via-white/80 lg:to-transparent"></div>
        {/* Image from the example */}
        {/* <img
          src="/path/to/your/wedding-couple-image.jpg" // Replace with your actual image path
          alt="Wedding Couple"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}
      </div>
    </div>
  );
}
