// src/components/About.js
import React from "react";
import profile from "./profile.jpg";
const About = () => {
  return (
    <section
      style={{ background: "linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)" }}
      className="py-16 bg-cover text-gray-700 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-evenly space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <img
        src={profile}
        alt="profile"
        className="rounded-full w-56 h-56 object-cover shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">About Me</h2>
        <p className="mb-4 text-md leading-relaxed max-w-lg">
          I am a dedicated developer with a strong foundation in front-end
          technologies like React and Tailwind CSS and a background in
          full-stack development. I am passionate about creating visually
          appealing, interactive, and functional applications.
        </p>
        <p className="text-md leading-relaxed max-w-lg">
          I have experience in various web technologies and have developed
          projects ranging from e-commerce platforms to task management systems.
          I am always eager to learn new technologies and push my skills
          further.
        </p>
      </div>
    </section>
  );
};

export default About;
