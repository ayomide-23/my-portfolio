import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/ayomide-23" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/aderinto-ayomide-86a290382" },
  { name: "X", icon: SiX, href: "https://x.com/ayomide_aap" },
  // { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/yourprofile" },
  { name: "Email", icon: FaEnvelope, href: "mailto:aderintoayomide204@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="mt-16 px-6 pb-10 pt-8">
      <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-sm border border-black/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-black font-semibold text-lg">Ayomide.dev</p>
          <p className="text-black/70 text-sm">Building clean, modern experiences for the web.</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ name, icon: Icon, href }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-black/80 hover:text-black transition-colors"
              title={name}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-black/60 mt-4">© {new Date().getFullYear()} Ayomide.dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
