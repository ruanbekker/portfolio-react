import React from "react";

const projects = [
  {
    name: "DevOps Blog",
    description: "My Tech How-To Blog about AWS, DevOps and Linux.",
    link: "https://ruan.dev"
  },
  {
    name: "Docker Monitoring Stack",
    description: "An easy-to-use monitoring stack.",
    link: "https://github.com/ruanbekker/docker-monitoring-stack-gpnc",
  },
];

const Projects = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-medium text-turquoise">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

