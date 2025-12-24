import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiMysql,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TechMarquee = () => {
  const technologies = [
    { Icon: SiReact, name: "React" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: FaJava, name: "Java" },
    { Icon: SiCplusplus, name: "C++" },
    { Icon: SiGit, name: "Git" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="py-12 overflow-hidden mb-20 relative z-0">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Marquee container */}
        <motion.div
          className="flex gap-16"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechs.map((tech, index) => {
            const { Icon, name } = tech;
            return (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  size={56}
                  className="text-black/70 hover:text-black transition-colors"
                  title={name}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
