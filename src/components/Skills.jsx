import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiLeetcode } from "react-icons/si";

const Skills = ({ skill, darkMode }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    JavaScript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    NPM: <FaNpm />,
    MongoDB: <SiMongodb />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Python: <FaPython />,
    C: <TbCircleLetterC />,
    LeetCode: <SiLeetcode />,
  };

  return (
    <div
      title={skill}
      className={`w-[80px] h-[100px] md:w-[10%] md:min-w-[150px] md:h-[150px] flex items-center justify-center mb-6 border-2 ${
        darkMode ? 'border-skill-dark-border bg-background-dark2 hover:bg-background-dark3 hover:border-transparent' : 'border-skill-light-border bg-background-light2 hover:bg-background-light3 hover:border-transparent'
      } text-4xl rounded-md transition-transform duration-500 transform hover:scale-110`}
    >
      {icon[skill]}
    </div>
  );
};

export default Skills;
