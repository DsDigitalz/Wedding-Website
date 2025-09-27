// src/components/ServiceGrid.jsx

import React from "react";
import { motion } from "framer-motion";

// NOTE: You must have these imported or defined in your project
import ServiceCard from "./ServiceCard";
import { serviceData } from "../data/serviceData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Container variants for the staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Small delay between each card
      delayChildren: 0.2, // Initial delay before the first card animates
    },
  },
};

const ServiceGrid = () => {
  // Hook to trigger animation when the whole section scrolls into view
  const { ref, controls } = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* The responsive grid layout:
                  - Mobile: 1 column
                  - md: 2 columns
                  - lg: 4 columns
                */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              // Pass the index for custom staggered delay
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceGrid;
