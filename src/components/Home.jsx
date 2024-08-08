import React from "react";
import Type from "./Type";
// import Tilt from "react-parallax-tilt";
// import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[95vh] px-4 py-8 bg-[#1F2937] w-full overflow-x-hidden">
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400">
          Hello there!
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">
          I'M <b>Aravind P</b>
        </h1>
        <div className="text-green-200">
        <Type/>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
          <a href="#about" className="w-full">
            <div
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              About Me <BsPerson className="ml-2" />
            </div>
          </a>
          <a href="#contact" className="w-full">
            <div
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300 cursor-pointer"
            >
              Contact <CgPhone className="ml-2" />
            </div>
          </a>
        </div>
      </div>
      {/* <Tilt className="mt-6 lg:mt-10">
        <img className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full shadow-lg" src={Avatar} alt="Avatar" />
      </Tilt> */}
    </div>
  );
};

export default Home;
