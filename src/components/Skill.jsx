import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations"; // Ensure correct path

const skills = {
  Frontend: ["React Js", "Redux", "Next Js", "HTML", "CSS", "JavaScript", "Bootstrap"],
  Backend: ["Python", "Flask", "MySQL", "PostgreSQL", "MongoDB", "Node Js"],
  "Programing Language": ["C", "C++", "R", "Java"],
  Others: ["Git", "GitHub", "Netlify", "VS Code", "Postman"],
};

const Skill = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center items-center py-16 px-6"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide text-center"
        variants={fadeIn("up", "spring", 0.2, 1)}
      >
        My Skills
      </motion.h2>

      {/* Skill Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 w-full max-w-4xl">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700 transform hover:scale-105 transition duration-300 group flex flex-col items-center"
            variants={fadeIn("up", "spring", 0.2 * index, 0.8)}
          >
            {/* Floating Glow Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 rounded-2xl transition duration-500"></div>

            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-4 text-blue-300 group-hover:text-purple-400 transition duration-300 text-center">
              {category}
            </h3>
            
            {/* Skills List */}
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-lg text-gray-300 px-4 py-2 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 inline-block transition duration-300 hover:bg-purple-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
