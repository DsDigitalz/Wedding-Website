import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

// Animation variants for the whole navbar (fade-in/slide-in)
const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.nav
      // 🛑 FIX: Added 'fixed top-0 w-full z-50' to make sure the navbar is always visible and on top.
      className="fixed top-0 w-full flex items-center justify-between p-4 md:px-12 bg-gray-50 bg-opacity-80 backdrop-filter backdrop-blur-md z-50 border-b border-gray-200"
      variants={navbarVariants} // 👈 Apply Framer Motion
      initial="hidden"
      animate="visible"
    >
      {/* Desktop & Mobile Logo */}
      <div className="logo">
        <span className="text-2xl md:text-4xl lg:text-[40px] font-bold text-orange-600 text-shadow-lg ">
          True<span className="text-gray-700">Love</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="links text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group uppercase font-medium"
          >
            {link.name}
            {/* Active Link Indicator (Simplified styling for clarity) */}
            {link.name === "Home" && (
              <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-orange-600" />
            )}
          </a>
        ))}
      </div>

      {/* Desktop Consult Button */}
      <a
        href="#"
        className="navlinks hidden lg:flex items-center space-x-2 px-6 py-2 border-2 border-gray-700 text-gray-700 font-bold uppercase hover:bg-gray-700 hover:text-white transition-colors duration-300"
      >
        <span>Consult</span>
        <FaArrowRight />
      </a>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        {" "}
        {/* Ensure button is on top */}
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {mobileMenuOpen ? (
            <CgClose className="h-8 w-8" />
          ) : (
            <CgMenuRight className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Using Framer Motion conditionally) */}
      {mobileMenuOpen && (
        <motion.div
          // 🛑 FIX: Use fixed positioning for the full-screen menu overlay
          className="fixed top-[68px] w-50 p-4 bg-gray-50  lg:hidden"
          initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Slide in
          exit={{ opacity: 0, x: "100%" }} // Slide out (requires AnimatePresence in parent)
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="block text-2xl font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2 border-b border-gray-100 uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              {/* Mobile Consult Button */}
              <a
                href="#"
                className="navlinks mt-8 flex items-center space-x-2 px-6 py-3 border-2 border-gray-700 text-gray-700 font-bold uppercase hover:bg-gray-700 hover:text-white transition-colors duration-300 justify-center"
              >
                <span>Consult</span>
                <FaArrowRight />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
