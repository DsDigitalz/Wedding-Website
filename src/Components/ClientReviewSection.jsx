import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion hooks and component

// Star Component (Unchanged)
const Star = ({ className }) => (
  <svg
    className={`w-7 h-7 sm:w-7 sm:h-7 lg:w-7 lg:h-7 p-1 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// --- Animation Variants ---
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
// --- End Animation Variants ---

// --- Animated Review Card Component ---
const AnimatedReviewCard = ({ review, delay }) => {
  const ref = useRef(null);
  // Trigger animation when 20% of the component is in view
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      // Apply the animation when the component is in view
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: delay }}
      key={review.id}
      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    >
      {/* Review Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={review.image}
          alt={`${review.name} wedding`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Review Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-slate-800 ">
          {review.name}
        </h3>

        {/* Star Rating */}
        <div className="flex gap-1.5 lg:gap-1">
          {renderStars(review.rating)}
        </div>

        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed italic">{review.text}</p>
      </div>
    </motion.div>
  );
};
// --- End Animated Review Card Component ---

const ClientReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Daniella O'Neil",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan lacuis tincidunt.",
      image: "wedding24.png",
    },
    {
      id: 2,
      name: "Jacquelin D'Ripper",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar felis sit amet cursus cursus. Sed ac tellus non nisl facilisis faucibus.",
      image: "wedding20.png",
    },
  ];

  // Ref and useInView for the Left Section (Title Block)
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, amount: 0.2 });

  return (
    <div className=" bg-gradient-to-bl from-white to-orange-100/50 py-15 px-4">
      <div>
        <div className="max-w-[1440px] lg:px-7 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-0 items-start">
          {/* Left Section (Animated) */}
          <motion.div
            ref={leftRef}
            variants={itemVariants}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="lg:pr-8 flex flex-col lg:gap-5 lg:w-[480px] xl:w-[600px] bg-white px-10 py-12 shadow-xl rounded-xl"
          >
            {/* Logo */}
            <div className="w-20 h-12 flex items-center justify-center mb-8">
              <div className="text-slate-700 text-xl font-bold">
                <img src="Lavender.png" alt="" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-8 ">
              Client Review To Our Service
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit. Our clients' satisfaction is our top
              priority.
            </p>
          </motion.div>

          {/* Right Section - Reviews (Uses Animated Card Component) */}
          <div className="flex flex-col lg:flex-row gap-10">
            {reviews.map((review, index) => (
              <AnimatedReviewCard
                key={review.id}
                review={review}
                // Stagger the animation slightly
                delay={index * 0.2 + 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewSection;
