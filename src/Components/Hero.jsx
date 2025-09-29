import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="  top-10 flex flex-col lg:flex-row items-center justify-between h-screen bg-gray-50 overflow-hidden" behavior="smooth">
      
      {/* Decorative Flower Left */}
     
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -left-5 top-1/2 -translate-y-1/2 lg:top-1/3 opacity-80 lg:opacity-100 z-10"
      >
        <img
          src="flowerbg.png"
          alt="Decorative Flowers"
          className="w-20 sm:w-24 lg:w-28 object-cover"
        />
      </motion.div>

      {/* // ------------------------------------------------------------------
        // 🔥 FIX 1: Content Container (Combined Mobile/Desktop)
        // We REMOVE 'absolute' for mobile and rely on Flex/Grid containment.
        // The container now ensures content is vertically centered on ALL screens.
        // ------------------------------------------------------------------
      */}
      <motion.div
        className=" lg:w-1/2 p-6 md:p-12  xl:pl-30 lg:pl-24 lg:py-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-10 mb-15 sm:mb-0 z-20 h-full" id="home"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          className="text-lg sm:text-2xl text-gray-800 mb-4"
          variants={itemVariants}
        >
          — Hello and Welcome,
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-4"
          variants={itemVariants}
        >
          Plan Your <br />
          <span className="text-orange-600 drop-shadow-sm">
            Dream Wedding
          </span>{" "}
          <br />
          With
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis
          tincidunt.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center space-x-3 px-8 py-3 bg-[#D1F0B1] text-black font-bold uppercase rounded-tl-3xl rounded-br-3xl border-2 border-white shadow-[5px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 max-w-fit mx-auto lg:mx-0"
        >
          <span>Book for Consult</span>
          <FaArrowRight className="text-2xl bg-black text-white p-1 rounded-tl-xl rounded-br-xl" />
        </motion.a>
      </motion.div>

      {/* // ------------------------------------------------------------------
        // 🔥 FIX 2: Right Image (Mobile)
        // We use 'inset-0' to stretch the image, but we must use 'justify-end' 
        // on the parent <section> to position the content area correctly.
        // The content is now the first child, and the image is layered behind it.
        // ------------------------------------------------------------------
      */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 lg:hidden z-0"
      >
        <img
          src="Heroimg.png"
          alt="Wedding Hero"
          className="h-screen w-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </motion.div>

      {/* Right Image (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="hidden lg:block relative w-1/2 h-screen z-0"
      >
        <img
          src="Heroimg.png"
          alt="Wedding Hero"
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}