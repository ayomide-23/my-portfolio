import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiCss3,
  SiMysql,
  SiPhp,
  SiHtml5
} from "react-icons/si";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FlavorHub",
      description: "A clean recipe app with category filter, image hover effects, and responsive design.",
      image: "/images/recipe.jpg",
      languages: ["React", "CSS", "Spoonacular API"],
      icons: [SiReact, SiCss3],
      liveLink: "https://ayomide-23.github.io/recipe-app/",
      githubLink: "https://github.com/ayomide-23/recipe-app",
      category: "personal"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "/images/portfolio.png",
      languages: ["React", "Tailwind", "Framer Motion", ],
      icons: [SiReact, SiTailwindcss,],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      category: "personal"
    },
    {
      id: 3,
      title: "EasyPark",
      description: "A user focused Parking Management System built with React. Allows real-time parking slot bookings, payment via Paystack, history tracking, and more.",
      image: "/images/landingpage.jpg",
      languages: ["React", "PHP", "CSS", "MySQL", "Paystack API"],
      icons: [SiReact, SiCss3, SiMysql, SiPhp,],
      liveLink: "https://easy-park-frontend-aderinto-ayomides-projects.vercel.app/",
      githubLink: "https://github.com/ayomide-23/EasyPark-frontend",
      category: "personal"
    },
    {
      id: 4,
      title: "Weathrly",
      description: "A weather app that provides current weather data and forecasts for any location using OpenWeather API.",
      image: "/images/weathrly.jpg",
      languages: ["Html", "Css", "JavaScript", "OpenWeather API"],
      icons: [SiHtml5, SiJavascript, SiCss3],
      liveLink: "https://weathrly-brown.vercel.app/",
      githubLink: "https://github.com/ayomide-23/weathrly",
      category: "personal"
    },
    {
      id: 5,
      title: "SCS",
      description: "A smart construction safety admin dashboard.It provides a centralized interface where administrators can monitor workers, view safety data, track reports, and manage construction site safety operations effectively.",
      image: "/images/scs.jpg",
      languages: ["React", "Tailwind CSS"],
      icons: [SiReact, SiTailwindcss],
      liveLink: "https://smart-construction-safety.vercel.app/",
      githubLink: "https://github.com/ayomide-23/smart-construction-safety",
      category: "personal"
    },
    {
      id: 6,
      title: "Speedify",
      description: "Speedify is a modern web application that allows users to measure their internet performance in real-time. It provides accurate metrics for ping (latency), download speed, and upload speed, displayed in a clean, responsive dashboard.",
      image: "/images/speedify.jpg",
      languages: ["React", "Tailwind CSS", "Node.js"],
      icons: [SiReact, SiTailwindcss, SiNodedotjs],
      liveLink: "https://speedify-six.vercel.app/",
      githubLink: "https://github.com/ayomide-23/speedify",
      category: "personal"
    },
    {
      id: 7,
      title: "Buddysync",
      description: "BuddySync pairs you with motivated learners worldwide so you can stay focused, accountable, and crush your study goals.",
      image: "/images/Buddysync.png",
      languages: ["React", "Tailwind CSS"],
      icons: [SiReact, SiTailwindcss],
      liveLink: "https://www.buddysync.net/",
      githubLink: "https://github.com/ayomide-23/buddysync",
      category: "client"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

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
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black mb-12 text-center"
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: "All", value: "all" },
            { label: "Personal Project", value: "personal" },
            { label: "Client Work", value: "client" },
          ].map((btn) => (
            <motion.button
              key={btn.value}
              type="button"
              onClick={() => setFilter(btn.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                filter === btn.value
                  ? "bg-black text-white"
                  : "bg-white/40 text-black border-2 border-black/20 hover:border-black/40"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-black/70 text-sm mb-4">{project.description}</p>

                  {/* Languages with Icons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.icons.map((Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        className="text-black/70 hover:text-black transition-colors"
                        title={project.languages[index]}
                      >
                        <Icon size={24} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-black text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Preview
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 border-2 border-black text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-black/5 transition-colors"
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
