"use client";  // This marks the file as a client component

import "./globals.css";
import NavBar from "@/app/components/NavBar/Navbar";
import MobileMenu from "@/app/components/NavBar/MobileMenu";
import { useState } from "react";
import Accroche from "./components/Accroche";
import Aside from "./components/Aside/aside";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setMenuOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

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
        <header className="flex justify-between items-center px-7 py-3">
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
        <hr className="h-px border-0 dark:bg-gray-700" />

        {/* Main Content with opacity change when menu is open */}
        <main className={`transition-opacity duration-300 ${isMenuOpen ? "opacity-50" : "opacity-100"}`}>
          <div className="flex justify-center w-full">
            {/* Main content area */}
            <div className="w-full max-w-screen-lg px-4 sm:px-2">
              {children}
         
              <Accroche />
                   <div className="m-55"></div>
                    <AboutMe />
                    
                        <Experience/>

                        <Projects/>
                        <Contact/>
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
