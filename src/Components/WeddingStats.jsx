// src/components/WeddingStats.jsx
import React from "react";
import { motion } from "framer-motion";

export default function WeddingStats() {
  return (
    <section className="bg-[#F9EBDD] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT IMAGES */}
        <div className="relative flex-1 flex justify-center">
          {/* Top Image */}
          <motion.img
            src="wedding-venue.jpg"
            alt="Wedding Venue"
            className="w-80 h-auto rounded-md shadow-md border-2 border-gray-800 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          {/* Bottom Overlapping Image */}
          <motion.img
            src="wedding-crowd.jpg"
            alt="Wedding Celebration"
            className="w-72 h-auto rounded-md shadow-md border-2 border-orange-600 absolute -bottom-10 -right-10 z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-6">
          {/* Small Icon */}
          <div className="w-10 h-10">
            <img src="floral-icon.png" alt="Floral Icon" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Dedicated To Join Your Journey For Best{" "}
            <span className="text-black">Wedding Event</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit.
          </p>

          {/* Stats Row */}
          <div className="flex gap-6">
            <div className="bg-white shadow-md rounded-md px-6 py-4 text-center">
              <p className="text-2xl font-bold text-orange-600">350+</p>
              <p className="text-gray-700 text-sm">Wedding Events</p>
            </div>
            <div className="bg-white shadow-md rounded-md px-6 py-4 text-center">
              <p className="text-2xl font-bold text-orange-600">150+</p>
              <p className="text-gray-700 text-sm">Decoration</p>
            </div>
            <div className="bg-white shadow-md rounded-md px-6 py-4 text-center">
              <p className="text-2xl font-bold text-orange-600">250+</p>
              <p className="text-gray-700 text-sm">Locations</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-900 text-white font-semibold uppercase rounded-md shadow hover:bg-green-800 transition"
          >
            See More →
          </a>
        </div>
      </div>
    </section>
  );
}
