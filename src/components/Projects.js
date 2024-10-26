// src/components/Projects.js
import React from "react";
import course from "./courses.png";
import tictactoe from "./tictactoe.png";
import currency from "./currency.png";

const Projects = () => {
  const projectList = [
    {
      title: "Courses-Selling-Webapp",
      description:
        "An innovative project that demonstrate the concept of filters and how to use toast using react.js.",
      imageUrl: course,
    },
    {
      title: "Currency Converter",
      description:
        "A webapp which can be used to convert one currency into another.",
      imageUrl: currency,
    },
    {
      title: "TIC-TAC-TOE",
      description: "A mini game created using HTML, CSS and Javascript.",
      imageUrl: tictactoe,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 text-gray-700 px-6 sm:px-10"
    >
      <h2 className="text-3xl font-bold mb-8 animate-fade-in">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto md:h-[300px] lg:h-[400px] object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-md">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
