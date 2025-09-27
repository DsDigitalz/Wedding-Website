// src/components/WeddingPlanningSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation"; // Adjust path as needed
// Importing the custom SVG as a React component
import { ReactComponent as LeafIcon } from "./LeafIcon.svg";

/* NOTE: For the Leaf Icon, you would typically save the SVG 
  code as a file like 'LeafIcon.svg' and import it.
  For simplicity here, I'll define a placeholder component.
*/

// Placeholder for the Leaf Icon SVG
const LeafIconPlaceholder = (props) => (
  <svg
    className="w-8 h-8 text-black"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 18V6M15 9l-3 3-3-3M9 15l3-3 3 3" />
    <path d="M9 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

// Framer Motion Variants for the animation (fade-in and slide-in)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger the animation of the child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WeddingPlanningSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Top Image: A placeholder for the yellow flowers image */}
      <div className="flex justify-center mb-10">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="https://via.placeholder.com/800x200/FFD700/000000?text=Yellow+Flowers"
          alt="A row of bright yellow flowers"
          className="w-full max-w-4xl h-auto object-cover"
          style={{ clipPath: "inset(0 0 50% 0)" }} // Example for cropping the bottom part
        />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Icon and Headings */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <motion.div variants={itemVariants} className="mb-6">
              <LeafIconPlaceholder className="w-8 h-8 text-neutral-800" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-serif leading-tight mb-2"
            >
              <span className="text-neutral-700 block">
                What We Serve To Plan
              </span>
              <span className="text-neutral-700 block">
                Your <span className="text-amber-700">Best Wedding</span>
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Description and Button */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center pt-10 md:pt-0">
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 mb-8 max-w-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="#"
              className="inline-flex items-center text-sm font-semibold tracking-wider text-black uppercase group"
            >
              SEE MORE
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingPlanningSection;
