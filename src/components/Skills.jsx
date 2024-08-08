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
import { TbCircleLetterC  } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb,SiLeetcode } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    JavaScript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    NPM: <FaNpm />,
    MongoDB:<SiMongodb />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Python:<FaPython />,
    C: <TbCircleLetterC  />,
    LeetCode: <SiLeetcode />,
  };

  return (
    <div title={skill} className="w-[100px] h-[100px] md:w-[10%] md:min-w-[150px] md:h-[150px] flex items-center justify-center mb-6 border-2 border-cyan-700 text-4xl rounded-md transition-transform duration-500 transform hover:scale-110 bg-[#111827] hover:bg-[#435e98] hover:border-transparent">
      {icon[skill]}
    </div>
  );
};

export default Skills;
