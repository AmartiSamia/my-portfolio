"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import NavBar from "@/app/components/NavBar/Navbar";
import MobileMenu from "@/app/components/NavBar/MobileMenu";
import Accroche from "./components/Accroche";
import Aside from "./components/Aside/aside";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certfications/Certifications";
import Skills from "./components/Skills/Skills";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const setMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  // Handle Navbar visibility on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scroll is down, hide the navbar
      setIsNavbarVisible(true);
    } else {
      // If scroll is up, show the navbar
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        </style>
      </head>
      <body className="bg-[#0a192f] text-white p-5 lg:px-11 sm:p-1 sm:pt-4">
        {/* Header and NavBar */}
        <header
          className={`flex justify-between items-center px-7 py-3 fixed top-0 left-0 w-full z-50 bg-[#0a192f] ${!isNavbarVisible && "hidden"}`}
        >
          <div className="flex items-center">
            <div
              id="logo"
              className="text-white text-4xl font-bold flex items-center m-0 pl-4 lg:static max-sm:ml-[-20px]"
            >
              <div className="text-gray-400">{"{"}</div>
              <div className="text-[#64ffda] mx-0">S</div>
              <div className="text-gray-400">{"}"}</div>
            </div>
          </div>
          <NavBar />
          <MobileMenu setOpacity={setMenuOpen} />
        </header>

        {/* HR Element with adjusted margin-top */}
        <hr className="h-px border-0 mt-[50px] dark:bg-gray-700" /> {/* Added margin-top */}

        {/* Main content starts after the navbar */}
        <main className={`transition-opacity duration-300 mt-[-50px] ${isMenuOpen ? "opacity-50" : "opacity-100"}`}>
          <div className="flex justify-center w-full mt-[80px]"> {/* Adjusted margin-top */}
            {/* Main content area */}
            <div className="w-full max-w-screen-lg px-4 sm:px-2">
              {children}
              <Accroche />
              <AboutMe id="about" />
              <Experience id="experience" />
              <Skills id="skills" />
              <Projects id="projects" />
              <Certifications id="certifications" />
              <Contact id="contact" />
            </div>
          </div>
        </main>

        {/* Sidebar (Aside) */}
        <div className="lg:block hidden">
          <Aside />
        </div>

        {/* Render Mobile Menu outside of the main content */}
        {isMenuOpen && <MobileMenu setOpacity={setMenuOpen} />}
      </body>
    </html>
  );
}
