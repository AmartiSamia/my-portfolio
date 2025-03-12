import Image from "next/image";
import Ibm from "./Images/Logos/Ibm.png";
// import IbmFullStack from "./Images/Certifcates/IbmFullStack.png";
import IbmFullStack from "./Images/Certifcates/image.png";
import Microsoft_C from "./Images/Certifcates/Microsoft_C.png"
import Microsoft_logo from "./Images/Logos/MicrosoftLogo.png"
import HonkKongLogo from "./Images/Logos/UST.svg.png"
import HonkKongCertificat from "./Images/Certifcates/HongkongC.png"

export default function Certifications() {
    return (
        <>
            <main className="mb-90 block max-sm:ml-[-10px] lg:mr-[-90px] lg:ml-[-80px] max-sm:mt-[80px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row ml-[-15px] md:p-12 sm:gap-4 md:ml-[-40px] md:gap-1">
                <div className="md:w-2/3 sm:w-1/2 sm:mx-10 max-sm:w-full">
                    <h1 className="text-[#64ffda] text-xl font-bold mb-4 flex items-center">
                        <span id="Name" className="text-3xl font-[300]">04.</span>
                        <span id="Name" className="text-[#ccd6f6] text-3xl ml-2">Credentials I've Earned</span>
                        <hr className="flex-grow border-t border-[#8892b0bd] ml-4" />
                    </h1>
                </div>

                <div className="bg-[#112240] mb-9 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-6 transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
    <div className="w-full sm:w-1/2 flex flex-col items-start">
     <Image alt="A collection of certification badges" className="w-full h-auto rounded-lg" height="300" src={IbmFullStack} width="400"/>
    </div>
    <div className="w-full sm:w-1/2 sm:text-sm">
     <h2 className="text-xl font-bold mb-2 text-[#64ffda]">
      IBM Full Stack Software Developer
     </h2>
     <p className="text-gray-400 mb-4">
      This certification showcases my proficiency in various technologies and tools used in full stack software development. It covers both frontend and backend development with a focus on modern tools and frameworks such as React.js, Node.js, Express, and MongoDB.
     </p>
     <p className="text-gray-400 mb-6">
      In addition to this certification, I have completed several related courses to gain expertise in different areas of software development, including database management, version control systems (Git), and cloud-based services.
     </p>
     <a className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded mt-5 transition-colors duration-300 hover:bg-[#64ffda] hover:text-[#112240]" href="#" id="myNameTitle">
      Check This Out!
     </a>
    </div>
   </div>
   <div className="bg-[#112240] mb-9 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-6 transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
    <div className="w-full sm:w-1/2 sm:text-sm">
     <h2 className="text-xl font-bold mb-2 text-[#64ffda]">
      IBM AI Developer
     </h2>
     <p className="text-gray-400 mb-4">
      This certification showcases my proficiency in various technologies and tools used in full stack software development. It covers both frontend and backend development with a focus on modern tools and frameworks such as React.js, Node.js, Express, and MongoDB.
     </p>
     <p className="text-gray-400 mb-6">
      In addition to this certification, I have completed several related courses to gain expertise in different areas of software development, including database management, version control systems (Git), and cloud-based services.
     </p>
     <a className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded mt-5 transition-colors duration-300 hover:bg-[#64ffda] hover:text-[#112240]" href="#" id="myNameTitle">
      Check This Out!
     </a>
    </div>
    <div className="w-full sm:w-1/2 flex flex-col items-start">
     <Image alt="A collection of certification badges" className="w-full h-auto rounded-lg" height="300" src={IbmFullStack} width="400"/>
    </div>
   </div>
   <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2 max-sm:grid-cols-1">
    {/* <!-- Certification 1 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg">
     <div className="flex justify-between items-center mb-4">
      <Image alt="Microsoft logo" className="w-9 h-12" height="40" src={Microsoft_logo} width="40"/>
     </div>
     <h2 className="text-xl font-bold text-[#64ffda] mb-2">
      Foundational C# with Microsoft Certification
     </h2>
     <p className="text-gray-400 mb-4">
      A collection of certifications showcasing my skills and expertise in various technologies and tools.
     </p>
     <Image alt="A collection of certification badges" className="rounded-lg mb-4" height="200" src={Microsoft_C} width="300"/>
    </div>
    {/* <!-- Certification 2 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg">
     <div className="flex justify-between items-center mb-4">
      <Image alt="Hong Kong logo" className="w-9 h-12" height="40" src={HonkKongLogo} width="40"/>
     </div>
     <h2 className="text-xl font-bold text-[#64ffda] mb-2">
      Software Engineering: Software Design and Project Management
     </h2>
     <p className="text-gray-400 mb-4">
      A collection of certifications showcasing my skills and expertise in various technologies and tools.
     </p>
     <Image alt="A collection of certification badges" className="rounded-lg mb-4" height="200" src={HonkKongCertificat} width="300"/>
    </div>
    {/* <!-- Certification 3 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg">
     <div className="flex justify-between items-center mb-4">
      <Image alt="Hong Kong logo" className="w-9 h-12" height="40" src={HonkKongLogo} width="40"/>
     </div>
     <h2 className="text-xl font-bold text-[#64ffda] mb-2">
      Software Engineering: Software Design and Project Management
     </h2>
     <p className="text-gray-400 mb-4">
      A collection of certifications showcasing my skills and expertise in various technologies and tools.
     </p>
     <Image alt="A collection of certification badges" className="rounded-lg mb-4" height="200" src={HonkKongCertificat} width="300"/>
    </div>
    {/* <!-- Certification 4 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg">
     <div className="flex justify-between items-center mb-4">
      <Image alt="Hong Kong logo" className="w-9 h-12" height="40" src={HonkKongLogo} width="40"/>
     </div>
     <h2 className="text-xl font-bold text-[#64ffda] mb-2">
      Software Engineering: Software Design and Project Management
     </h2>
     <p className="text-gray-400 mb-4">
      A collection of certifications showcasing my skills and expertise in various technologies and tools.
     </p>
     <Image alt="A collection of certification badges" className="rounded-lg mb-4" height="200" src={HonkKongCertificat} width="300"/>
    </div>
    {/* <!-- Certification 5 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg">
     <div className="flex justify-between items-center mb-4">
      <Image alt="Hong Kong logo" className="w-9 h-12" height="40" src={HonkKongLogo} width="40"/>
     </div>
     <h2 className="text-xl font-bold text-[#64ffda] mb-2">
      Software Engineering: Software Design and Project Management
     </h2>
     <p className="text-gray-400 mb-4">
      A collection of certifications showcasing my skills and expertise in various technologies and tools.
     </p>
     <Image alt="A collection of certification badges" className="rounded-lg mb-4" height="200" src={HonkKongCertificat} width="300"/>
    </div>
   </div>         
            </main>
        </>
    );
}