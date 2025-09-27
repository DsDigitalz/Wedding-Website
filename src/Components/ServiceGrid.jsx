// src/components/ServiceGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  LuCakeSlice,
  LuCamera,
  LuGem,
  LuUsers,
  LuUtensils,
  LuFileText,
  LuLandmark,
  LuMusic,
} from "react-icons/lu"; // <-- use lucide (Lu) icons

// Services data (icons chosen to closely match your screenshot)
const services = [
  { id: 1, icon: <LuCakeSlice />, title: "Wedding Cake" },
  { id: 2, icon: <LuCamera />, title: "Wedding Photography" },
  { id: 3, icon: <LuGem />, title: "Rings & Jewelry" },
  { id: 4, icon: <LuUsers />, title: "Guest Management" },
  { id: 5, icon: <LuUtensils />, title: "Catering" },
  { id: 6, icon: <LuFileText />, title: "Invitations" },
  { id: 7, icon: <LuLandmark />, title: "Venue Setup" },
  { id: 8, icon: <LuMusic />, title: "Entertainment" },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

export default function ServiceGrid() {
  return (
    <section className=" bg-white">
      <motion.div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-15 lg:pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top icon / beige band */}
              <div className="bg-[#F5E2D5] flex justify-center items-center h-40">
                <motion.div
                  variants={iconVariants}
                  className="text-6xl text-gray-800"
                  aria-hidden
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Bottom content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus placerat velit.
                </p>
                <a
                  href="#"
                  className="font-bold text-black uppercase text-sm flex items-center justify-center gap-2 hover:underline"
                >
                  SEE MORE →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
