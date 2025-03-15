'use client'
import { useState } from 'react';

type ExperienceKey = 'Iker' | 'Veolia'; // Explicitly define the possible keys

export default function Experience() {
  const [activeTab, setActiveTab] = useState<ExperienceKey>('Iker'); // Type for activeTab

  const experiences: Record<ExperienceKey, { name: string; title: string; date: string; url: string; details: string[] }> = {
    Iker: {
      name: 'Iker',
      title: 'Full Stack Developer Intern',
      date: 'July 2024 – September 2024',
      url: 'https://www.iker.ma/',
      details: [
        'Contributed to the design and development of the "Booking-Container" platform, creating a responsive website using Laravel, PHP, mySQL, Bootstrap, Tailwind, HTML, CSS, and JavaScript.',
        'Designed and implemented real-time user and admin dashboards to enhance user engagement and optimize container booking management.',
        'Built a secure, scalable backend infrastructure with RESTful APIs, JWT authentication, and custom middleware to ensure data protection, security, and performance.',
        'Conducted quality assurance tests on APIs to ensure that all endpoints met functionality, security, and performance standards.',
        'Contributed to the design of UML diagrams and collaborated with an Agile team of developers for efficient project delivery.',
      ],
    },
    Veolia: {
      name: 'Veolia',
      title: 'IT Intern',
      date: 'July 2024 – August 2024',
      url: 'https://www.veolia.com/fr',
      details: [
        'Observed and gained hands-on exposure to how virtualization is implemented over DSI, enhancing my understanding of modern IT infrastructure.',
        'Developed a solid understanding of networking basics, including protocols like TCP/IP, DNS, and DHCP, and how they function within LAN and WAN environments.',
        'Learned the processes behind maintaining and troubleshooting network infrastructure to ensure reliability and efficiency across city services.',
        'Gained insight into network monitoring tools and how issues are proactively addressed to ensure continuous connectivity.',
      ],
    },
  };

  return (
    <main id="experience" className="mb-90   flex lg:mt-[-120px] max-sm:ml-[-10px] lg:ml-[50px] max-sm:mt-[-160px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row items-start ml-[-15px] md:p-12 lg:gap-12 sm:gap-4 md:ml-[-40px] md:gap-1">
      <div className="lg:mt-8 sm:mt-18 md:mt-8 max-sm:mt-18 md:w-3/3 sm:w-1/2 sm:mx-8 max-sm:w-full">
        <h1 className="text-[#64ffda] text-xl font-bold mb-4 flex items-center">
          <span id="Name" className="text-3xl font-[300]">02.</span>
          <span id="Name" className="text-[#ccd6f6] text-3xl ml-2">Experiences</span>
          <hr className="flex-grow border-t border-[#8892b0bd] ml-4" />
        </h1>

        <div className="sm:w-full max-w-full flex flex-col md:flex-row max-sm:flex-col sm:flex-row mt-10 sm:justify-center lg:items-start">
          <div className="md:w-1/4 max-sm:w-full max-sm:flex-col mb-6 md:mb-0 sm:mt-9 ">
            <ul id="Name" className="space-y-3 max-sm:space-x-5 max-sm:ml-[30%] max-sm:inline text-[#8892b0] text-[18px] sm:text-sm mt-2 sm:text-[15px] ">
              {Object.keys(experiences).map((key) => (
                <li
                  key={key}
                  className={`border-l-3 pl-3 cursor-pointer transition-all duration-300 ease-in-out max-sm:inline transform ${
                    activeTab === key
                      ? 'scale-105 text-[#64ffda] border-[#64ffda] font-bold bg-[#112240] p-2 '
                      : 'border-[#233554] hover:font-bold hover:scale-105 text hover:bg-[#112240] p-2'
                  }`}
                  onClick={() => setActiveTab(key as ExperienceKey)}
                  aria-selected={activeTab === key}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`sm:w-full ml-7 max-sm:ml-[5px] transition-all duration-300 ease-in-out lg:text-[16px] mt-4 md:mt-0 md:pl-8 sm:text-sm sm:ml-18 md:ml-0 lg:ml-5 sm:mr-[-200px] lg:mr-[80px] md:mr-[-30px] ${
              activeTab === 'Iker' || activeTab === 'Veolia' ? 'opacity-100 translate-y-0 ease-linear' : 'opacity-0 translate-y-5'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6]">
                {experiences[activeTab].title}{' '}
                <a href={experiences[activeTab].url} target="_blank" rel="noopener noreferrer">
                  <span className="text-[#64ffda]"> @ {experiences[activeTab].name}</span>
                </a>
              </h3>
              <p id="Name" className="text-[#8892b0] mt-2">
                {experiences[activeTab].date}
              </p>
              <ul className="mt-4 sm:text-[13px] max-sm:text-[13px]  lg:text-[16px] space-y-2 text-[#8892b0]">
                {experiences[activeTab].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#64ffda] mr-4">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
