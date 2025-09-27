import React from "react";
import { motion } from "framer-motion";

const WeddingPlanningSection = () => {
  return (
    <section className="bg-white overflow-hidden pb-10 lg:pb-20">
      {/* Top Image */}
      <div className="z-100 flex justify-center">
        <motion.img
          src="flowerbg3.png"
          alt="A row of bright yellow flowers"
          className="w-full max-w-4xl h-auto object-cover"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-between items-center">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-4 items-center lg:items-start lg:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mx-auto lg:mx-0">
              <img src="Floral design.png" alt="" />
            </div>
            <h2 className="text-center lg:text-left text-4xl md:text-5xl font-bold leading-tight mb-2">
              <span className="text-neutral-700 block">
                What We Serve To Plan Your{" "}
                <span className="text-orange-600">Best Wedding</span>
              </span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col justify-center lg:w-1/"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="lg:mt-19  text-base text-center lg:text-left text-gray-600 mb-6 max-w-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit.
            </p>

            <motion.a
              href="#"
              className="navlinks border w-40 mx-auto lg:mx-0 flex justify-center items-center gap-2 font-bold text-black uppercase hover:bg-black hover:text-white hover:transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEE MORE
              <span className="mb-1 text-2xl transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlanningSection;
