import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypeWriter = ({ roles = ["Ayomide", "a Developer", "a Software Engineer", "a Full Stack Developer"] }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const prefix = "Hello, I'm ";
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 120;
    const delayBeforeDelete = 2000;
    const delayBeforeNextRole = 500;

    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(prefix + currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed);
      } else {
        // Move to next role
        timer = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
          setCharIndex(0);
        }, delayBeforeNextRole);
      }
    } else {
      // Type the current role
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(prefix + currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Role complete, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, roleIndex, isDeleting, roles]);

  return (
    <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 min-h-20">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypeWriter;
