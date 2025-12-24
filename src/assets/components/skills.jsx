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

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: SiReact,
      skills: [
        { name: "React", percentage: 85, icon: SiReact },
        { name: "JavaScript", percentage: 70, icon: SiJavascript },
        { name: "Tailwind CSS", percentage: 88, icon: SiTailwindcss },
        { name: "HTML5", percentage: 95, icon: SiHtml5 },
        { name: "CSS3", percentage: 90, icon: SiCss3 },
        { name: "React Native", percentage: 75, icon: SiReact },
      ],
    },
    {
      category: "Backend & Databases",
      icon: SiNodedotjs,
      skills: [
        { name: "Node.js", percentage: 72, icon: SiNodedotjs },
        { name: "MongoDB", percentage: 60, icon: SiMongodb },
        { name: "Python", percentage: 50, icon: SiPython },
        { name: "MySQL", percentage: 78, icon: SiMysql },
        { name: "Java", percentage: 80, icon: FaJava },
        { name: "C++", percentage: 70, icon: SiCplusplus },
      ],
    },
    {
      category: "Tools & Others",
      icon: SiGit,
      skills: [
        { name: "Git & GitHub", percentage: 92, icon: SiGit },
        { name: "Framer Motion", percentage: 85, icon: SiReact },
        { name: "REST APIs", percentage: 60, icon: SiNodedotjs },
      ],
    },
  ];

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-black/80"
                  >
                    <CategoryIcon size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        {/* Skill Name with Icon */}
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="text-black/70"
                          >
                            <SkillIcon size={18} />
                          </motion.div>
                          <div className="flex justify-between items-center flex-1">
                            <span className="font-semibold text-black">
                              {skill.name}
                            </span>
                            <span className="text-sm text-black/60">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-black/10 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-black to-black/70 rounded-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-black/10 text-center max-w-2xl mx-auto"
        >
          <p className="text-black/80 leading-relaxed">
            I'm constantly learning and improving my skills. I have experience working with modern
            frontend frameworks, backend technologies, and various development tools. Feel free to
            reach out if you'd like to collaborate or discuss any of these technologies!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
