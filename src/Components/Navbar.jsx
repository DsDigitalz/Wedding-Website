import { useState, useEffect } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      className="navlinks fixed top-0 w-full flex items-center justify-between p-4 md:px-12 bg-gray-50 bg-opacity-80 backdrop-blur-md z-50 border-b border-gray-200"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo and Desktop Navigation (Omitted for brevity) */}
      <div className="logo">
        <span className="text-2xl md:text-4xl lg:text-[40px] font-bold text-orange-600">
          True<span className="text-gray-700">Love</span>
        </span>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => handleLinkClick(link.name)}
            className={`navlinks relative uppercase font-medium transition-colors duration-300 ${
              activeLink === link.name
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            {link.name}
            {activeLink === link.name && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-orange-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="navlinks hidden lg:flex items-center space-x-2 px-6 py-2 border-2 border-gray-700 text-gray-700 font-bold uppercase hover:bg-gray-700 hover:text-white transition-colors duration-300"
      >
        <span>Consult</span>
        <FaArrowRight />
      </a>

      {/* Mobile Menu Button (Omitted for brevity) */}
      <div className="lg:hidden z-50">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {mobileMenuOpen ? (
            <CgClose className="h-8 w-8" />
          ) : (
            <CgMenuRight className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[68px] w-full p-4 bg-gray-50/95 backdrop-blur-sm z-[99] lg:hidden overflow-y-auto h-115"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-6 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    // ✅ CHANGE: Reduced font size from text-2xl to text-xl for mobile menu
                    className={`navlinks block text-lg font-medium transition-colors duration-300 py- border-b border-gray-100 uppercase ${
                      activeLink === link.name
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="mt-8 flex items-center space-x-2 px-6 py-3 border-2 border-gray-700 text-gray-700 font-bold uppercase hover:bg-gray-700 hover:text-white transition-colors duration-300 justify-center"
                >
                  <span>Consult</span>
                  <FaArrowRight />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}