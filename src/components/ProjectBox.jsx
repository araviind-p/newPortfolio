import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const desc = {
  WeatherApp: {
    description:
      "Simple weather app that can be used for finding weather conditions in different cities using openweathermap api",
    github: "https://github.com/araviind-p/Weather-app",
    website: "https://react-weather-app-rmyz.onrender.com/"
  },
  BookList: {
    description:
      "A simple book list web app built with the MERN stack. It can be used for creating, viewing, editing and deleting book lists.",
    github: "https://github.com/araviind-p/BookStore-Backend/tree/main",
    website: "https://bookstore-frontend-1jxu.onrender.com/"
  },
  SimpleAmazon: {
    description:
      "Developed a full-stack e-commerce web application replicating the core functionalities of Amazon using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    github: "https://github.com/araviind-p/amazon-mern-backend",
    website: "https://amazon-mern-frontend.onrender.com/"
  },
  Attendance: {
    description:
      "Developed a full-stack application for attendance management using MERN stack.",
    github: "https://github.com/araviind-p/Attendance",
    website: "https://attendance-nmo8.onrender.com/"
  },
  FoodRecipie: {
    description: "Food recipe app.",
    github: "https://github.com/araviind-p/Food-recipie-React",
    website: "https://food-recipie-react.onrender.com"
  },
  OTP_MERN: {
    description:
      "This project is a scalable and secure implementation of authentication and authorization using Node.js, Express.js, bcrypt, MongoDB, and React js.",
    github: "https://github.com/araviind-p/OTP-verification-MERN",
    website: "https://otp-verification-mern-1.onrender.com/"
  }
};

const ProjectBox = ({ projectPhoto, projectName, darkMode }) => {
  const project = desc[projectName] || {};

  return (
    <div
      className={`${
        darkMode ? 'bg-background-dark2 text-text-dark2' : 'bg-background-light2 text-text-light2'
      } p-4 rounded-lg shadow-lg`}
    >
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={projectPhoto}
        alt={`${projectName} display`}
      />
      <h3 className="text-xl font-semibold mb-2">{projectName}</h3>
      <p className="mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button
            className={`flex items-center px-4 py-2 ${
              darkMode ? 'bg-button-dark text-text-dark hover:bg-button-dark-hover' : 'bg-button-light text-text-light hover:bg-button-light-hover'
            } rounded-md shadow-md transition duration-300`}
          >
            <FaGithub className="mr-2" /> Github
          </button>
        </a>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <button
            className={`flex items-center px-4 py-2 ${
              darkMode ? 'bg-button-dark2 text-text-dark hover:bg-button-dark2-hover' : 'bg-button-light2 text-text-light hover:bg-button-light2-hover'
            } rounded-md shadow-md transition duration-300`}
          >
            <CgFileDocument className="mr-2" /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
