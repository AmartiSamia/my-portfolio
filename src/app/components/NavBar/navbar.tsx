// src/app/components/NavBar.tsx
import React from 'react';

const NavBar = () => {
  return (
    <div id="NavBar_principal" className="hidden lg:block">
      <nav className="flex items-center space-x-8 text-[#64ffda] text-sm">
        <a href="#" className="hover:text-[#64ffda]">01. <span className="text-[#CCD6F6] hover:text-[#64ffda]">About</span></a>
        <a href="#" className="hover:text-[#64ffda]">02. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Experience</span></a>
        <a href="#" className="hover:text-[#64ffda]">03. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Certifications</span></a>
        <a href="#" className="hover:text-[#64ffda]">04. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Projects</span></a>
        <a href="#" className="hover:text-[#64ffda]">05. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Contact</span></a>
        <a href="#" className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f]">Resume</a>
      </nav>
    </div>
  );
};

export default NavBar;
