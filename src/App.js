// src/App.js
import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Studies from "./components/Studies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <motion.div
        initial={{ opacity: 0 }} // Initial state for animation
        animate={{ opacity: 1 }} // Final state
        transition={{ duration: 0.5 }} // Transition duration
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Slight delay for the About section
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Slight delay for the About section
      >
        <Studies />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Further delay for the Projects section
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }} // Further delay for the Contact section
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }} // Further delay for the Contact section
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
