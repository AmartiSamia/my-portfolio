"use client";
import React from 'react';

const NavBar = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="NavBar_principal" className="hidden lg:block">
      <nav className="flex items-center space-x-8 text-[#64ffda] text-sm">
        <a href="#about" onClick={() => handleClick("about")} className="hover:text-[#64ffda]">01. <span className="text-[#CCD6F6] hover:text-[#64ffda]">About</span></a>
        <a href="#experience" onClick={() => handleClick("experience")} className="hover:text-[#64ffda]">02. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Experience</span></a>
        <a href="#skills" onClick={() => handleClick("skills")} className="hover:text-[#64ffda]">03. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Skills</span></a>
        <a href="#certifications" onClick={() => handleClick("certifications")} className="hover:text-[#64ffda]">04. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Certifications</span></a>
        <a href="#projects" onClick={() => handleClick("projects")} className="hover:text-[#64ffda]">05. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Projects</span></a>
        <a href="#contact" onClick={() => handleClick("contact")} className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f]">Contact</a>
      </nav>
      
    </div>
  );
};

export default NavBar;
