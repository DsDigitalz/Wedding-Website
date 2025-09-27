import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6"; // Assuming you have react-icons installed
const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className=" bg-gradient-to-r from-white to-[#F8E8D8] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Gradient */}
      {/* <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-br from-white via-orange-50 to-orange-100/50 hidden md:block"></div> */}

      {/* Floating Image */}
      <div className="absolute top-0 right-0 max-w-xs md:max-w-sm z-0 opacity-60">
        <img
          src="aboutimg.png"
          alt="Floral decoration"
          className="w-full h-auto"
        />
      </div>

      {/* Content Grid */}
      <motion.div
        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Card */}
        <motion.div
          className=" lg:mt-0 flex flex-col gap-5 bg-white  px-6 py-10 sm:p-10 lg:px-16 lg:py-20 shadow-xl rounded-lg max-w-xl mx-auto lg:mx-0 z-100"
          variants={itemVariants}
        >
          {/* Decorative Icon */}
          <motion.div
            variants={itemVariants}
            className="text-2xl text-gray-800 mb-4"
          >
            <img src="Flower.png" alt="" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            About Our
            <br /> Wedding Planner
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt.
          </motion.p>

          {/* Button */}
          {/* Book for Consult Button */}
          <a
            href="#"
            className="ml-0 navlinks inline-flex items-center justify-center  cursor-pointer space-x-3 px-8 py-3 bg-black text-white font-bold uppercase  rounded-tl-3xl rounded-br-3xl  border-2 border-[#D1F0B1]
                       transition-all duration-300   transform -translate-y-1 shadow-[5px_10px_0px_0px_rgba(0,0,0,1)] max-w-fit mx-auto lg:mx-0 z-10"
          >
            <span>SEE MORE</span>
            <FaArrowRight className="text-3xl bg-white text-black p-1 rounded-tl-xl rounded-br-xl" />
          </a>
        </motion.div>

        {/* Right Images */}
        <div className="z-1  relative flex justify-center items-center lg:block">
          <div className="space-y-6 lg:space-y-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full">
            {/* Image 1 */}
            <motion.div
              className="relative  w-85  md:w-80 h-auto mx-auto lg:absolute lg:top-30 lg:-left-40 shadow-2xl"
              variants={itemVariants}
            >
              <img
                src="aboutimg1.png"
                alt="Couple holding hands"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="-z-1 relative w-85  md:w-72 h-auto mx-auto lg:absolute lg:top-36 lg:left-30 shadow-2xl"
              variants={itemVariants}
            >
              <img
                src="aboutimg2.png"
                alt="Groomsmen smiling"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="-z-10 relative w-85  md:w-72 h-100 mx-auto lg:absolute lg:top-27 lg:right-0 shadow-2xl"
              variants={itemVariants}
            >
              <img
                src="aboutimg3.png"
                alt="Wedding moment"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
