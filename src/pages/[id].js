import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData"; // Import your project data here

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="text-black">
      <h2 className="text-2xl font-semibold ">{project.title}</h2>
      {/* Render other project details here */}
      {project.ProjectInfo.CompanyInfo.map((info) => (
        <li key={info.id}>
          <strong>{info.title}:</strong> {info.details}
          <p> {info.webdetails} </p>
        </li>
      ))}
    </div>
  );
};

export default ProjectDetail;
