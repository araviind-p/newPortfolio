import React from "react";
import Skills from "./Skills";
import { FaFileDownload } from "react-icons/fa";
import { useSelector } from "react-redux";

const About = () => {
  const { darkMode } = useSelector((state) => state.appSlice);
  return (
    <div
      id="about"
      className={`${darkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'
        } min-h-screen w-full overflow-x-hidden `}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Get to <b>know</b> me!
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Hi, my name is <b>Aravind P</b> and I am from Kannur, Kerala, India.
          I'm a <b>Full-stack web developer</b>  and have recently graduated with a <b>B.Tech in Computer Science</b>. <br />
          <br />
          I love to create projects with beautiful designs and put my own
          twists on it, you can check out some of my work in the projects
          section.
          <br />
          <br />I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
          Apart from coding I love to make designs and do photography in my
          spare time.
        </p>
        <a
          href="https://drive.google.com/file/d/1Cut-MDMXJYi-g0AeXiqB8bzNt6vFXsml/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-4 px-6 py-3 ${darkMode ? 'bg-button-dark text-text-dark hover:bg-button-dark3-hover' : 'bg-button-light text-text-light hover:bg-button-light3-hover'
            } rounded-md shadow-md transition duration-300`}
        >
          <button className="flex items-center">
            Resume <FaFileDownload className="ml-2" />
          </button>
        </a>
      </div>

      <div className="py-8 w-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Skillset</h1>
        <div className="w-screen flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 px-4 w-[85%]">
            <Skills skill="HTML" darkMode={darkMode} />
            <Skills skill="CSS" darkMode={darkMode} />
            <Skills skill="JavaScript" darkMode={darkMode} />
            <Skills skill="Bootstrap" darkMode={darkMode} />
            <Skills skill="React" darkMode={darkMode} />
            <Skills skill="NPM" darkMode={darkMode} />
            <Skills skill="MongoDB" darkMode={darkMode} />
            <Skills skill="Git" darkMode={darkMode} />
            <Skills skill="GitHub" darkMode={darkMode} />
            <Skills skill="Python" darkMode={darkMode} />
            <Skills skill="C" darkMode={darkMode} />
            <Skills skill="LeetCode" darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
