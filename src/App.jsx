import React from "react";
import { motion } from "framer-motion";
import Navbar from "./assets/components/navbar";
import TypeWriter from "./assets/components/TypeWriter";
import TechMarquee from "./assets/components/TechMarquee";
import About from "./assets/components/about";
import Projects from "./assets/components/project";
import Skills from "./assets/components/skills";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";
import "./App.css";

export default function App() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/images/cv/cv.pdf"; 
    link.download = "Ayomide_CV.pdf";
    link.click();
  };

  return(
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated striped background */}
      <div className="animated-stripes"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar/>
        
        {/* Hero Section */}
        <div className=" flex items-start justify-center px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-center"
          >
            <TypeWriter roles={["Ayomide", "a Developer", "a Software Engineer", "a Full Stack Developer"]} />
            
            <p className="text-lg md:text-xl text-black/80 mb-8 leading-relaxed">
              A passionate full stack developer crafting beautiful and functional web and app experiences. 
              I love turning ideas into reality with clean code and creative solutions.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors duration-200"
            >
              Download My CV
            </motion.button>
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <TechMarquee />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}