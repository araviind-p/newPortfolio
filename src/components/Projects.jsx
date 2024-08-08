import React from "react";
import ProjectBox from "./ProjectBox";
import WeatherImg from "../images/WeatherApp.png";
import BookListImg from "../images/BookList.png";
import SimpleAmazonImg from "../images/SimpleAmazon.png";
import AttendanceImg from "../images/Attendance.png";
import FoodRecipie from "../images/FoodRecipie.png";
import OTP_MERN from "../images/OTP_MERN.png";

const projectData = [
  { photo: OTP_MERN, name: "OTP_MERN" },
  { photo: SimpleAmazonImg, name: "SimpleAmazon" },
  { photo: BookListImg, name: "BookList" },
  { photo: FoodRecipie, name: "FoodRecipie" },
  { photo: WeatherImg, name: "WeatherApp" },
  { photo: AttendanceImg, name: "Attendance" }
];

const Projects = () => {
  return (
    <div id="projects" className="flex justify-center py-8 px-4 bg-gray-800 text-gray-100 min-h-screen w-full overflow-x-hidden">
      <div className="w-[85%]">

        <h1 className="text-4xl font-bold text-center mb-8">
          My <b>Projects</b>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <ProjectBox
              key={project.name}
              projectPhoto={project.photo}
              projectName={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
