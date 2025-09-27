import React from "react";





const WeddingPlanningSection = () => {
  // Removed: const { ref, controls } = useScrollAnimation();

  return (
    <section className=" bg-white overflow-hidden">
      {/* Top Image: A placeholder for the yellow flowers image */}
      <div className="z-100 flex justify-center">
        {/* Changed from motion.img to a regular img tag */}
        <img
          src="flowerbg3.png"
          alt="A row of bright yellow flowers"
          className="aw-full max-w-4xl h-auto object-cover"
          // Example for cropping the bottom part
        />
      </div>

      {/* Changed from motion.div to a regular div */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 items-start">
          {/* Left Column: Icon and Headings */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            {/* Changed from motion.div to a regular div */}
           

            {/* Changed from motion.h2 to a regular h2 tag */}
            <h2 className="text-center text-4xl md:text-5xl font-bold leading-tight mb-2">
              <span className="text-neutral-700 block">
                What We Serve To Plan Your <span className="text-orange-600">Best Wedding</span>
              </span>
             
            </h2>
          </div>
          <div className="mx-auto">
            <img src="Floral design.png" alt="" />
          </div>

          {/* Right Column: Description and Button */}
          <div className="md:col-span-6 lg:col-span-7  flex flex-col justify-center  md:pt-0">
            {/* Changed from motion.p to a regular p tag */}
            <p className="text-base text-center  text-gray-600 mb-6 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit.
            </p>

            {/* Changed from motion.a to a regular a tag */}
            <a 
              href="#"
              className="navlinks border  w-40 mx-auto flex justify-center items-center gap-2 font-bold  text-black uppercase"
            >
              SEE MORE
              <span className="mb-1 text-2xl transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlanningSection;
