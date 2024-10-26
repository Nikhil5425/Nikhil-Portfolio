// src/components/Studies.js
import React from "react";

const Studies = () => {
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "ITS Engineering College, Greater Noida",
      year: "2021 - 2025",
      description:
        "Currently pursuing my B.Tech degree with a focus on Web development and data structures.",
    },
    {
      degree: "Intermediate",
      institution: "DAV Public School, Gopalganj",
      year: "2021",
      description:
        "Completed my Intermediate with subjects - Physics, Chemistry, Maths.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-700 px-6 sm:px-10">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in">My Studies</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-md font-medium mb-1">{edu.institution}</p>
            <p className="text-md text-gray-600 mb-4">{edu.year}</p>
            <p className="text-md leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Studies;
