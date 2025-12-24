import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-10 px-6 -mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Left Side - About Content (3 columns) */}
          <div className="md:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Introduction */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-black mb-4">Who I Am</h3>
                <p className="text-black/80 leading-relaxed">
                  I'm a passionate developer with a keen interest in creating beautiful, 
                  functional, and user centric web applications. With a strong foundation 
                  in both frontend and backend technologies, I enjoy solving complex problems 
                  and continuously learning new tools and frameworks.
                </p>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-black mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-black/10">
                    <h4 className="font-bold text-black">Bachelor's Degree in Software Engineering</h4>
                    <p className="text-black/70">Babcock University • 2023 - present</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-black/10">
                    <h4 className="font-bold text-black">Secondary School</h4>
                    <p className="text-black/70">Sacred Heart Catholic College • 2017 - 2023</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-black/10">
                    <h4 className="font-bold text-black">Python for Data Science and Machine Learning Bootcamp</h4>
                    <p className="text-black/70">Udemy • 2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-black mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "Python", "React", "Node.js", "HTML/CSS", "MySQL"].map(
                    (lang) => (
                      <span
                        key={lang}
                        className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-black mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-black/10">
                    <h4 className="font-bold text-black">Frontend Developer</h4>
                    <p className="text-black/70">BuddySync •  2025</p>
                    <p className="text-black/60 mt-2 text-sm">
                      Building responsive web applications with React and Tailwind CSS
                    </p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-black/10">
                    <h4 className="font-bold text-black">Freelance Web and App Developer</h4>
                    <p className="text-black/70">Self-employed</p>
                    <p className="text-black/60 mt-2 text-sm">
                      Developed custom websites for small businesses and startups
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Picture (2 columns) */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* Placeholder Image Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-black/20 to-black/40 border-4 border-black/20 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/images/me2.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-black/20 rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
