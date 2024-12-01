import React from "react";
import ProjectBox from "./ProjectBox";
import WeatherImg from "../images/WeatherApp.png";
import BookListImg from "../images/BookList.png";
import SimpleAmazonImg from "../images/SimpleAmazon.png";
import AttendanceImg from "../images/Attendance.png";
import FoodRecipie from "../images/FoodRecipie.png";
import OTP_MERN from "../images/OTP_MERN.png";
import GithubImg from "../images/Github.png";
import JobTrackerImg from "../images/JobTracker.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const projectData = [
  { photo: JobTrackerImg, name: "JobTracker" },
  { photo: GithubImg, name: "Github" },
  { photo: OTP_MERN, name: "OTP_MERN" },
  { photo: SimpleAmazonImg, name: "SimpleAmazon" },
  { photo: BookListImg, name: "BookList" },
  { photo: FoodRecipie, name: "FoodRecipie" },
  { photo: WeatherImg, name: "WeatherApp" },
  { photo: AttendanceImg, name: "Attendance" },
];

const Projects = () => {
  const { darkMode } = useSelector((state) => state.appSlice);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger the appearance of child elements
    },
  };

  const projectBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      id="projects"
      className={`${
        darkMode
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      } flex justify-center py-8 px-4 min-h-screen w-full overflow-x-hidden pt-20`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
      variants={containerVariants}
    >
      <div className="w-[90%]">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <b>Projects</b>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.name}
              variants={projectBoxVariants} // Apply animation to each project box
              whileHover={{ scale: 1.05 }} // Slight scale-up effect on hover
            >
              <ProjectBox
                projectPhoto={project.photo}
                projectName={project.name}
                darkMode={darkMode}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
