import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
    exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Glassy navbar container */}
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg px-6 py-4"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-black">
              Ayomide.dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black/90 hover:text-black transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="md:hidden mt-4 pt-4 border-t border-white/20"
              >
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={mobileItemVariants}
                      className="text-black/90 hover:text-black transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;