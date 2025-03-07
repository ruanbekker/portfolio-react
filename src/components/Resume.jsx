import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import resumeData from "../data/resume.json";
import { FaBriefcase, FaGraduationCap, FaTools, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  // Ensure dark mode persists
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 pt-24">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">{resumeData.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{resumeData.title}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{resumeData.summary}</p>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
	  <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700 flex items-center">
            <FaBriefcase className="mr-2 text-turquoise" /> Experience
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-lg font-medium">{job.position} - {job.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12">
	        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700 flex items-center">
            <FaGraduationCap className="mr-2 text-turquoise" /> Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution} - {edu.date}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-12">
	        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700 flex items-center">
            <FaTools className="mr-2 text-turquoise" /> Skills
          </h2>
          <div className="mt-4">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 mt-1 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full bg-turquoise"
                    initial={{ width: 0 }}
                    animate={{ width: `${(skill.level / 5) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
	  <h2 className="text-2xl font-semibold border-b pb-2 border-gray-300 dark:border-gray-700 flex items-center">
            <FaCertificate className="mr-2 text-turquoise" /> Certifications
          </h2>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-lg font-medium">{cert.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;


