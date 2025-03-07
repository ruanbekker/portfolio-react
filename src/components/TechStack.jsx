import React from "react";
import { FaDocker, FaAws, FaPython, FaGithub } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiArgo } from "react-icons/si";

const tech = [
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiTerraform />, name: "Terraform" },
  { icon: <SiArgo />, name: "ArgoCD" },
  { icon: <FaPython />, name: "Python" },
];

const TechStack = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {tech.map((t, i) => (
          <div key={i} className="text-5xl text-turquoise">
            {t.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

