// src/components/Hero.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { motion } from "framer-motion"; // Importing motion
import bg1 from "./rb_3947.png";
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const tex = useTexture(bg1);

  return (
    <section
      style={{
        backgroundImage: `url(${bg1})`,
      }}
      className={`min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center p-6 relative`}
    >
      <Canvas style={{ height: 200, width: 200 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 1, 0]} />
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <meshStandardMaterial tex color="#8f6ab3" wireframe />
        </Sphere>
      </Canvas>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-black mb-4 animate-fade-in"
        initial={{ y: -50 }} // Initial Y position
        animate={{ y: 0 }} // Final Y position
        transition={{ duration: 0.5 }} // Transition duration
      >
        Hello, I’m Nikhil Kumar
      </motion.h1>
      <p className="text-lg text-gray-800 font-bold mb-6 max-w-xl">
        I’m a developer focused on creating engaging and functional web
        applications with a blend of creativity and technical expertise.
      </p>
      <button
        onClick={scrollToProjects}
        className="px-8 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-400 transition mt-4"
      >
        View My Work
      </button>
    </section>
  );
};

export default Hero;
