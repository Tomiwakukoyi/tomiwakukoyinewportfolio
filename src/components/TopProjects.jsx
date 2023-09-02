import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

const TopProjects = () => {
  const topProjects = projectsData.slice(0, 3);

  return (
    <div className="mt-10 ">
      <h2 className="font-bold text-3xl flex items-center justify-center">
        Top Projects
      </h2>
      <div className="flex flex-wrap justify-center mt-5">
        {topProjects.map((project) => (
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
      <div className="mt-5 text-center">
        <Link to="/portfolio">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopProjects;
