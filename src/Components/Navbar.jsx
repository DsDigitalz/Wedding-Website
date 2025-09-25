import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="relative flex items-center justify-between p-4 md:px-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-200">
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
            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group uppercase"
          >
            {link.name}
            {link.name === "Home" && (
              <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-orange-600" />
            )}
          </a>
        ))}
      </div>
      {/* Desktop Consult Button */}
      <a
        href="#"
        uppercase
        className="hidden lg:flex items-center space-x-2 px-6 py-2 border-2 border-gray-700 text-gray-700 font-bold uppercase hover:bg-gray-700 hover:text-white transition-colors duration-300"
      >
        <span>Consult</span>
        <FaArrowRight />
      </a>
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {mobileMenuOpen ? (
            <CgClose className="h-8 w-8" />
          ) : (
            <CgMenuRight className="h-8 w-8" />
          )}
        </button>
      </div>
    
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 bg-gray-50 border-t border-gray-200 shadow-md md:hidden">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="block text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="mt-4 flex items-center space-x-2 px-4 py-2 border-2 border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-white transition-colors duration-300 justify-center"
              >
                <span>Consult</span>
                <FaArrowRight />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
