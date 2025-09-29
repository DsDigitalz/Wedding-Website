import React from "react";
import { motion } from "framer-motion";
// Icons needed for the social media links
import { Facebook, Instagram, Twitter, Youtube, X } from "lucide-react";

// --- Dummy Data ---
const socialLinks = [
  { icon: Facebook, href: "#facebook" },
  { icon: Instagram, href: "#instagram" },
  { icon: X, href: "#x" }, // Using 'X' for the Twitter icon
  { icon: Youtube, href: "#youtube" },
  { icon: X, href: "#tiktok" }, // Reusing 'X' as a placeholder for TikTok
];

const menuLinks = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

const serviceLinks = [
  { name: "Wedding Plan", href: "#" },
  { name: "Photography", href: "#" },
  { name: "Decoration", href: "#" },
  { name: "Invitation", href: "#" },
  { name: "Catering", href: "#" },
];

const Footer = () => {
  // Framer Motion animation variants for fade-in and slide-up
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-gray-50 pt-12 lg:pt-20 lg:pb-10 text-gray-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content Area - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10">
          {/* Column 1: Logo, Description & Socials */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <div className="logo">
              <span className="text-3xl md:text-4xl lg:text-[40px] font-bold text-orange-600">
                True<span className="text-gray-700">Love</span>
              </span>
            </div>
            <p className="text-base text-gray-600  max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 text-xl">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-amber-600 transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Menu Links */}
          <div>
            <h5 className="text-gray-900 font-bold text-xl mb-4">Menu</h5>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Links */}
          <div>
            <h5 className="text-gray-900 font-bold text-xl mb-4">Services</h5>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Map Placeholder */}
          <div className="w-full h-55">
            {/* Placeholder for the Google Map thumbnail/iframe */}

            <img
              src="Google Maps.jpg"
              alt="Location Map Placeholder"
              className="w-full h-full object-cover shadow-lg rounded-md border border-gray-200"
            />
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-300 mt-6 py-4">
          <p className="text-sm text-gray-500 text-center">
            Copyright © 2023, All Right Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
