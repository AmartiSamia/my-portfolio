"use client";
import React, { useState, useEffect } from "react";

const MobileMenu = ({ setOpacity }: { setOpacity: (isOpen: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpacity(!isOpen);  // Pass the state to set opacity in Layout
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpacity(false);  // Reset opacity when the menu is closed
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="block lg:hidden sm:p-0.5">
        <button
          onClick={toggleMenu}
          id="hamburger"
          className="text-[#64ffda]"
        >
          {/* Toggle Hamburger Icon */}
          {isOpen ? (
            <i id="close-icon" className="fas fa-times text-3xl"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-bars-staggered text-3xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-y-0 right-0 w-1/2 bg-[#112240] bg-opacity-100 p-3 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4 px-5">
          <button
            id="close-menu"
            onClick={closeMenu}
            className="text-[#64ffda]"
          >
            <i id="close-icon" className="fas fa-times text-5xl"></i>
          </button>
        </div>
     
        <nav className="bg-[#112240] flex justify-center items-center h-max text-[#64ffda] text-lg pt-10">
            <ul className="block justify-center items-center space-y-10 pt-1">
                <li><a href="#" className="hover:text-[#64ffda]"><div className="flex justify-center">01. </div><span className="text-[#CCD6F6] hover:text-[#64ffda] flex justify-center">About</span></a></li>
                <li><a href="#" className="hover:text-[#64ffda]"><div className="flex justify-center">02. </div><span className="text-[#CCD6F6] hover:text-[#64ffda] flex justify-center">Experience</span></a></li>
                <li><a href="#" className="hover:text-[#64ffda]"><div className="flex justify-center">03. </div><span className="text-[#CCD6F6] hover:text-[#64ffda] flex justify-center">Certifications</span></a></li>
                <li><a href="#" className="hover:text-[#64ffda]"><div className="flex justify-center">04. </div><span className="text-[#CCD6F6] hover:text-[#64ffda] flex justify-center">Projects</span></a></li>
                <li><a href="#" className="hover:text-[#64ffda]"><div className="flex justify-center">05. </div><span className="text-[#CCD6F6] hover:text-[#64ffda] flex justify-center">Contact</span></a></li>
                <li><a href="#" className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] flex justify-center">Resume</a></li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
