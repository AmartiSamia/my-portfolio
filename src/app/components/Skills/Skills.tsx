import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { JSX } from 'react';
import { DiMongodb, DiDjango, DiPhp } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiNextdotjs, SiMysql, SiWordpress, SiShopify } from 'react-icons/si';
import { FaHtml5, FaBootstrap } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiFlask } from 'react-icons/si';
import { TbFileTypeSql } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';
import { PiFileCBold, PiFileCppBold, PiFileCSharpBold } from 'react-icons/pi';
import { CgTerminal } from 'react-icons/cg';
import { SiDotnet } from 'react-icons/si';
import { TbBrandLaravel } from 'react-icons/tb';

export default function Skills() {
  type TechCategory = {
    name: string;
    icon: JSX.Element;
  };

  const Languages = {
    French: 'French',
    English: 'English',
    Arabic: 'Arabic',
  };

  const techStack: {
    frontend: TechCategory[];
    backend: TechCategory[];
    tools: TechCategory[];
  } = {
    frontend: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <TbBrandReactNative /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Laravel', icon: <TbBrandLaravel /> },
      { name: 'Django', icon: <DiDjango /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'PHP', icon: <DiPhp /> },
      { name: 'SQL', icon: <TbFileTypeSql /> },
      { name: 'MongoDB', icon: <DiMongodb /> },
      { name: 'C', icon: <PiFileCBold /> },
      { name: 'C++', icon: <PiFileCppBold /> },
      { name: 'C#', icon: <PiFileCSharpBold /> },
    ],
    tools: [
      { name: 'Figma', icon: <FiFigma /> },
      { name: 'Bash Scripting', icon: <CgTerminal /> },
      { name: '.NET', icon: <SiDotnet /> },
    ],
  };

  return (
    <main id="skills" className="mb-90 w-full text-center flex justify-center max-sm:ml-[-10px] max-sm:mt-[80px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row items-start md:p-12 lg:mx-0 sm:gap-4 md:ml-[-40px] md:gap-1">
      <div className="lg:mt-8 sm:mt-18 md:mt-8 sm:ml-[-18px] max-sm:mt-18  md:w-full sm:w-full sm:mx-8 max-sm:w-full">
        <h1 className="text-[#64ffda] text-xl font-bold mb-4 text-center items-center flex justify-center">
          <hr className="flex-grow border-t border-[#64ffda] mr-4" />
          <span id="Name" className="text-[#ccd6f6] text-4xl mb-8 max-sm:text-[26px]">
            My Tech Stack
          </span>
          <hr className="flex-grow border-t border-[#64ffda] ml-4" />
        </h1>

        <div className="flex flex-wrap gap-4 justify-center ">
          {Object.keys(techStack).map((category) => (
            (techStack[category as keyof typeof techStack] as TechCategory[]).map((tech, index) => (
              <div
                key={index}
                className="text-center bg-[#112240] p-5 transition-transform transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0px_2px_2px_rgba(100,255,218,0.5)] rounded-lg flex flex-col items-center justify-center sm:w-1/6 md:w-1/6 lg:w-1/6 max-sm:w-1/4 max-sm:p-3"
              >
                <div className="text-4xl mb-2 text-center text-green-400 font-bold">{tech.icon}</div>
                <p className="text-white mt-2">{tech.name}</p>
              </div>
            ))
          ))}
        </div>

        <h1 className="text-[#64ffda] text-xl font-bold mb-4 text-center items-center flex justify-center">
          <hr className="flex-grow border-t border-[#64ffda] mr-4" />
          <span id="Name" className="text-[#ccd6f6] text-4xl mb-8 mt-8">
            Languages
          </span>
          <hr className="flex-grow border-t border-[#64ffda] ml-4" />
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(Languages).map((language, index) => (
            <div
              key={index}
              className="text-center bg-[#112240] p-4  pt-1 max-sm:p-4 max-sm:pt-2 max-sm:text-center transition-transform transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0px_2px_2px_rgba(100,255,218,0.5)] rounded-lg flex flex-col items-center justify-center sm:w-1/6 md:w-1/6 lg:w-1/6"
            >
              <p className="text-white mt-2 text-center">{Languages[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
