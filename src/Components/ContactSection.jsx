import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

const ContactSection = () => {
  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Delay starting the form's animation
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-[1440px] mx-auto py-15 px-6 sm:px-8 lg:px-12 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-15 lg:gap-24 items-start">
        {/* Left Section: Info and Text */}
        <motion.div
          className="flex-1 lg:max-w-[40%]"
          variants={formItemVariants}
        >
          <h1 className="text-4xl lg:text-5xl  font-bold text-gray-900 mb-6 leading-tight">
            Book For An <br />
            Appointment
          </h1>
          <p className="text-gray-600 mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Our Info
          </h2>
          <div className="space-y-3 text-lg">
            <div className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 text-amber-600 mr-3" />
              <span>+112233445566</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 text-amber-600 mr-3" />
              <span>truelove@wedding.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 text-amber-600 mr-3" />
              <span>Bandar Lampung</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Form Container with Frames */}
        <motion.div
          className="flex-1 w-full relative"
          variants={formItemVariants}
        >
          {/* Background Frames for visual effect */}
          <div className="absolute inset-0 border-2 border-black transform translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
          <div className="absolute inset-0 border-2 border-amber-800 opacity-30 transform -translate-x-3 -translate-y-3 pointer-events-none hidden sm:block" />

          {/* Form Card */}
          <div className="relative p-8 sm:p-12 bg-white shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
              Contact Us
            </h2>
            <form className="space-y-6">
              {/* Name and Phone Number fields */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full py-2 border-b border-gray-300 focus:border-amber-600 focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full py-2 border-b border-gray-300 focus:border-amber-600 focus:outline-none placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full py-2 border-b border-gray-300 focus:border-amber-600 focus:outline-none placeholder-gray-400"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="2"
                  placeholder="Leave Your Message"
                  className="w-full py-2 border-b border-gray-300 focus:border-amber-600 focus:outline-none placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}

              <a
                href="#"
                className="inline-flex items-center justify-center space-x-3 px-8 py-3 bg-black text-white font-bold uppercase rounded-tl-3xl rounded-br-3xl border-2 border-[#D1F0B1]
                                    transition-all duration-300 transform -translate-y-1 shadow-[5px_10px_0px_0px_rgba(0,0,0,1)] max-w-fit mx-auto lg:mx-0"
              >
                <span>SUBMIT</span>
                <FaArrowRight className="text-3xl bg-white text-black p-1 rounded-tl-xl rounded-br-xl" />
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
