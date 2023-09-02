import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData"; // Import your project data here

const Portfolio = () => {
  return (
    <div className="  flex flex-wrap justify-center">
      {projectsData.map((project) => (
        <div key={project.id} className="relative m-4">
          <img
            src={project.img}
            alt={project.title}
            className="w-64 h-48 object-cover cursor-pointer hover:opacity-75"
          />
          <Link
            to={`/project/${project.id}`}
            className="absolute inset-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Project
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
