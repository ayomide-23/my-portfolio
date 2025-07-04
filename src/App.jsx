import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const projects = [
  {
    title: "FlavorHub",
    description: "A clean recipe app with category filter, image hover effects, and responsive design.",
    image: "/images/recipe.jpg",
    tech: ["React", "CSS", "Spooncular API"],
    demo: "https://ayomide-23.github.io/recipe-app/",
    code: "https://github.com/ayomide-23/recipe-app",
  },
  {
    title: "EasyPark",
    description: "A user-focused Parking Management System built with React. Allows real-time parking slot bookings, payment via Paystack, history tracking, and more.",
    image: "/images/landingpage.jpg",
    tech: ["React", "CSS", "PHP", "MySQL", "Paystack"],
    demo: "https://easy-park-frontend-aderinto-ayomides-projects.vercel.app/",
    code: "https://github.com/ayomide-23/EasyPark-frontend",
  },
];


  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black border-b border-grey-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold">Ayomide.dev</h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li><a href="#hero" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>

          {/* Mobile Toggle button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu "><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-3 text-white font-medium">
              <li><a href="#hero" onClick={toggleMenu} className="hover:text-cyan-400">Home</a></li>
              <li><a href="#skills" onClick={toggleMenu} className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="h-screen mt-[-120px] flex flex-col justify-center items-center text-center bg-black text-white px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Hello, I'm Aderinto Ayomide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8"
        >
          A driven fullstack developer and aspiring software engineer building real-world apps with purpose.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-cyan-300 hover:to-purple-400 transition duration-300"
        >
          View Projects
        </motion.a>
      </div>
      {/* Skills & Expertise */}
      <section id="skills" className="bg-black text-white pt-15 pb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="skills"
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent "
        >
          Skills & Expertise
        </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {[
           { name: "HTML", level: 95 },
           { name: "CSS", level: 90 },
           { name: "JavaScript", level: 60 },
           { name: "React", level: 65 },
           { name: "Tailwind CSS", level: 50 },
           { name: "PHP", level: 70 },
           { name: "MySQL", level: 75 },
           { name: "Git", level: 70 },
           { name: "Framer Motion", level: 70 },
           { name: "Vite", level: 65 },
           { name: "C++", level: 70 },
           {name: "Java", level: 70},
           { name: "REST API", level: 60 },
          ].map((skill, i) => (
           <motion.div
               key={i}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: i * 0.05 }}
               viewport={{ once: true }}
            >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-white">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
               className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-700"
               style={{ width: `${skill.level}%` }}
              ></div>
           </div>
         </motion.div>
           ))}
  </div>
</section>
{/* Projects Section */}
<section id="projects" className="bg-black text-white py-20 px-6">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
  >
    Projects
  </motion.h2>

  <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
    {[...projects].map((project, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-cyan-500/20 transition duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, j) => (
              <span key={j} className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.demo}
              target="_blank"
              className="text-sm font-medium text-cyan-400 hover:underline"
            >
              Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              className="text-sm font-medium text-cyan-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="bg-black text-white py-20 px-6">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
  >
    Contact Me
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-xl mx-auto text-center"
  >
    {!submitted ? (
      <form
        onSubmit={(e) => {
          setSubmitted(true);
        }}
        action="https://formsubmit.co/aderintoayomide204@gmail.com"
        method="POST"
        className="space-y-6 text-left"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400 "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 rounded hover:from-cyan-300 hover:to-purple-400 transition duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>
    ) : (
      <div className="py-10">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Thank you!</h3>
        <p className="text-gray-300">Your message has been sent. I’ll reply shortly.</p>
      </div>
    )}
  </motion.div>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-white py-8 px-6">
  <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
    <p className="text-sm text-gray-400 text-center sm:text-left">
      © {new Date().getFullYear()} Ayomide. All rights reserved.
    </p>

    <div className="flex gap-6 text-xl">
      <a
        href="https://github.com/ayomide-23"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://wa.me/2347013841793"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a
        href="https://instagram.com/only_heishim"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://x.com/ayomide_aap"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </div>
  </div>
</footer>

    </>
  );
}
export default App;
