// src/components/WeddingPageContent.jsx

import React, { useRef, useEffect } from "react";
// Removed: import { motion, useInView, useAnimation } from "framer-motion";

// --- Data Structures ---

// 1. Gallery Data
const galleryData = [
  {
    id: 1,
    src: "gallery1.png",
    alt: "Couple on balcony",
    title: "Gallery Wedding 1",
    large: true,
  },
  {
    id: 2,
    src: "gallery2.png",
    alt: "Couple under veil",
    title: "Gallery Wedding 2",
  },
  {
    id: 3,
    src: "gallery3.png",
    alt: "Beach ceremony",
    title: "Gallery Wedding 3",
    large: true,
  },
  {
    id: 4,
    src: "gallery5.png",
    alt: "Golden light couple",
    title: "Gallery Wedding 4",
  },
  {
    id: 5,
    src: "gallery4.png",
    alt: "Garden couple",
    title: "Gallery Wedding 5",
  },
  {
    id: 6,
    src: "gallery6.png",
    alt: "Confetti toss",
    title: "Gallery Wedding 6",
  },
];

// 2. Placeholder for the Leaf Icon SVG
const LeafIconPlaceholder = (props) => (
  <svg
    className="w-10 h-10 text-neutral-800"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 18V6M15 9l-3 3-3-3M9 15l3-3 3 3" />
    <path d="M9 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

// --- GalleryCard Component (Cleaned) ---
const GalleryCard = ({ src, alt, title, large, index }) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300
            ${large ? "md:col-span-1 lg:row-span-2" : ""} 
            ${index === 0 ? "lg:col-start-1 lg:row-start-1" : ""}
            ${index === 2 ? "lg:col-start-3 lg:row-start-1" : ""}
        `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full brightness-105 h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Text Overlay (  Slides up on hover) */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 text-center bg-white text-black font-semibold 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
      >
        <h3 className="text-base sm:text-lg mb-1">{title}</h3>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium hover:text-orange-600 transition-colors"
        >
          SEE MORE
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

// --- Main Component: Combines Planning Section and Gallery (Cleaned) ---
const WeddingPageContent = () => {
  // Removed: const { ref, controls } = useScrollAnimation(0.2);

  return (
    <div className="bg-white">
      {/* -------------------- 1. WEDDING PLANNING SECTION -------------------- */}

      {/* --------------------------- 2. WEDDING GALLERY -------------------------- */}
      <section className="pb1-5 md:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {galleryData.map((item, index) => (
              <GalleryCard
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                large={item.large}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPageContent;
