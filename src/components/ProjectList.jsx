import React from 'react';

export default function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}
