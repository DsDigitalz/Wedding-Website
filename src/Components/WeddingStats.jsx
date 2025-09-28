// src/components/WeddingStats.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6"; // Assuming you have react-icons installed

export default function WeddingStats() {
  return (
    // Adjusted py-15 to py-16 for standard Tailwind spacing
    <section className="relative bg-[#F9EBDD] py-15 lg:pb-20">
      {/* Floating Image */}
      <div className="absolute top-0 right-0 max-w-xs md:max-w-sm z-0 lg:-top-25 xl:-top-20 2xl:top-0    xl:right-0 opacity-60">
        <img
          src="aboutimg.png"
          alt="Floral decoration"
          className="w-full h-auto"
        />
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        flex flex-col lg:flex-row items-center gap-1 lg:gap-20"
      >
        {/* LEFT IMAGES */}
        <div className="relative flex-1  justify-center w-full max-w-sm sm:max-w-md lg:max-w-[1440px]   mb-10 lg:mb-0">
          {/* Top Image: w-full on small screens, smaller on desktop */}
          <motion.img
            src="wedding14.png"
            alt="Wedding Venue"
            // Responsive width: w-3/4 on mobile, lg:w-80 on large screens. object-cover ensures aspect ratio.
            className="w-3/4 sm:w-80  lg:w-90 lg:h-120 object-cover rounded-md shadow-lg border-2 border-gray-800 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          />

          {/* Bottom Overlapping Image: Hidden on very small screens, responsive size on others */}
          <motion.img
            src="wedding9.png"
            alt="Wedding Celebration"
            // Responsive width. Adjusted positioning for better mobile visibility before large screen overlap.
            className="w-2/3 sm:w-72 lg:w-80 lg:h-100  object-cover rounded-md shadow-xl border-2 border-orange-600 
              absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-10 z-20 lg:left-50 lg:-bottom-15 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-5 lg:gap-8 items-center lg:items-start flex-1 w-full max-w-xl space-y-6">
          {/* Icon (Optional: Add animation here) */}
          <motion.div
            className="w-10 h-10 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="Bouquet.png "
              alt="Floral Icon"
              className="mt-5 lg:mt-10"
            />
          </motion.div>

          {/* Heading: lg:text-left for desktop alignment */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-0 lg:text-left font-bold text-gray-900 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            We Dedicated To Join Your Journey For Best{" "}
            <span className="text-black">Wedding Event</span>
          </motion.h2>

          {/* Paragraph: lg:text-left for desktop alignment */}
          <motion.p
            className="text-gray-600 mb-0 max-w-md text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit.
          </motion.p>

          {/* Stats Row: Responsive layout change */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6  mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Stat Item 1 */}
            <div className="bg-white shadow-md flex flex-col gap-2 rounded-md px-4 py-3 sm:px-6 sm:py-4 text-center min-w-[120px] flex-1 sm:flex-none">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">
                350+
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">Wedding Events</p>
            </div>
            {/* Stat Item 2 */}
            <div className="bg-white shadow-md  flex flex-col gap-2 rounded-md px-4 py-3 sm:px-6 sm:py-4 text-center min-w-[120px] flex-1 sm:flex-none">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">
                150+
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">Decoration</p>
            </div>
            {/* Stat Item 3 */}
            <div className="bg-white shadow-md flex flex-col gap-2 rounded-md px-4 py-3 sm:px-6 sm:py-4 text-center min-w-[120px] flex-1 sm:flex-none">
              <p className="text-xl sm:text-2xl lg:text-3xl  font-bold text-orange-600">
                250+
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">Locations</p>
            </div>
          </motion.div>

          {/* Button: lg:mx-0 for desktop alignment */}
          <a
            href="#"
            className="mt-3 navlinks inline-flex items-center justify-center  cursor-pointer space-x-3 px-8 py-3 bg-black text-white font-bold uppercase  rounded-tl-3xl rounded-br-3xl  border-2 border-[#D1F0B1]
                                transition-all duration-300   transform -translate-y-1 shadow-[5px_10px_0px_0px_rgba(0,0,0,1)] max-w-fit mx-auto lg:mx-0 z-10"
          >
            <span>SEE MORE</span>
            <FaArrowRight className="text-3xl bg-white text-black p-1 rounded-tl-xl rounded-br-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
