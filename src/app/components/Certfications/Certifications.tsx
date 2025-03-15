import Image from "next/image";
import Ibm from "./Images/Logos/Ibm.png";
// import IbmFullStack from "./Images/Certifcates/IbmFullStack.png";
import IbmFullStack from "./Images/Certifcates/Ibm_FullStack.png";
import Microsoft_C from "./Images/Certifcates/Microsoft_C.png"
// import Microsoft_logo from "./Images/Logos/MicrosoftLogo.png"
// import HonkKongLogo from "./Images/Logos/UST.svg.png"
import HonkKongCertificat from "./Images/Certifcates/HongkongC.png"
import Unix_WorkbenchCertificat from "./Images/Certifcates/Unix_Workbench.png"
import WebDesignCertificat from "./Images/Certifcates/WebDesignCertificat.png"
import ReactMeta from "./Images/Certifcates/ReactMeta.png"
import Python_AI_Dev from "./Images/Certifcates/Python_AI_Dev.png"
import ExpressNode from "./Images/Certifcates/ExpressNode.png"
import PythonFlask from "./Images/Certifcates/PythonFlask.png"
// import JohnsHopkingsLogo from "./Images/logos/JohnsHopkings.png"

export default function Certifications() {
    return (
        <>
            <main id="certifications" className="  max-sm:text-sm lg:mb-[990px] block max-sm:ml-[-10px] lg:mr-[-90px] lg:ml-[-80px] max-sm:mt-[80px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row ml-[-15px] md:p-12 sm:gap-4 md:ml-[-40px] md:gap-1">
                <div className="lg:mt-[-450px]  md:mt-8   md:w-2/3  mt-8  sm:w-1/2 sm:mx-10 max-sm:w-full">
                    <h1 className="text-[#64ffda] sm:mt-128 text-xl font-bold mb-4 flex items-center">
                        <span id="Name" className="lg:text-3xl font-[300] sm:text-[22px]">05.</span>
                        <span id="Name" className="text-[#ccd6f6] lg:text-3xl ml-2 sm:text-[22px]">Credentials I've Earned</span>
                        <hr className="flex-grow border-t border-[#8892b0bd] ml-4" />
                    </h1>
                </div>

                <div className="bg-[#112240] mb-9 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-7  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
    <div className="w-full sm:w-1/2 flex flex-col items-start">
    <a href="https://coursera.org/share/40c00deecae88a3e4707023e63bf456c"  target="_blank">
     <Image alt="A collection of certification badges" className="lg:w-full h-auto rounded-lg max-sm:h-[212] max-sm:w-[455] sm:h-[240] sm:w-[550] lg:h-full" height="400" src={IbmFullStack} width="500"/></a>
    </div>
    <div className="w-full sm:w-1/2 sm:text-sm">
  <h2 className="text-2xl font-bold sm:text-[19px] max-sm:text-[17px] mb-2 text-[#64ffda]">
    IBM Full Stack Software Developer
  </h2>
  <p className="text-gray-400 mb-8 lg:text-[15px] sm:text-[12px] max-sm:text-[13px]">
  This certificate validates mastery in <span className="text-gray-400 underline-animation">full-stack application development</span>, showcasing proficiency in designing, developing, and deploying scalable software solutions. It covers both <span className="text-gray-400 underline-animation">front-end</span> and <span className="text-gray-400 underline-animation">back-end development</span>, focusing on industry-standard tools and technologies such as <span className="text-gray-400 underline-animation">React.js</span>, <span className="text-gray-400 underline-animation">Node.js</span>, <span className="text-gray-400 underline-animation">Express</span>, <span className="text-gray-400 underline-animation">MongoDB</span>, and <span className="text-gray-400 underline-animation">cloud computing services</span>. Earning this certificate demonstrates a deep understanding of key software engineering principles, <span className="text-gray-400 underline-animation">coding standards</span>, <span className="text-gray-400 underline-animation">version control</span>, and <span className="text-gray-400 underline-animation">microservices architecture</span>, ensuring the ability to deliver high-quality, reliable, and modern software products. The completion of a <span className="text-gray-400 underline-animation">capstone project</span> further proves the practical skills required for building full-stack applications.

  </p>
  

  <a className="border border-[#64ffda] sm:text-[13px] max-sm:text-[13px] text-[#64ffda] px-6 py-3 rounded mt-9 transition-colors duration-300 hover:bg-[#64ffda] hover:text-[#112240]" target="_blank" href="https://coursera.org/share/40c00deecae88a3e4707023e63bf456c" id="myNameTitle">
    Check This Out!
  </a>
</div>

   </div>

   {/* //Ibm AI Developer */}
   <div className="bg-[#112240] mb-9 p-6 rounded-lg  shadow-lg flex flex-col sm:flex-row items-center gap-6 transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
   
   <div className="w-full sm:w-1/2 sm:text-sm">
   <div className="w-full sm:w-1/2 flex flex-col items-start">

     <Image alt="A collection of certification badges" className="lg:hidden sm:hidden max-sm:block md:hidden  mb-8 lg:w-full lg:h-full max-sm:h-[212] max-sm:w-[455]  w-full h-auto rounded-lg sm:h-[240] sm:w-[550]" height="300" src={IbmFullStack} width="400"/>
    </div>
  <h2 className="text-2xl font-bold mb-2 text-[#64ffda] sm:text-[19px] max-sm:text-[17px] ">
    IBM AI Developer
  </h2>
  
  <p className="text-gray-400 mb-8 lg:text-[15px] max-sm:text-[13px] sm:text-[12px] ">
    This certificate validates mastery in <span className="text-gray-400 underline-animation">AI-powered application development</span>, showcasing proficiency in designing, developing, and deploying intelligent solutions using AI technologies. It covers key areas such as <span className="text-gray-400 underline-animation">artificial intelligence (AI)</span>, <span className="text-gray-400 underline-animation">generative AI</span>, and <span className="text-gray-400 underline-animation">AI development with Python</span>. Earning this certificate demonstrates a deep understanding of <span className="text-gray-400 underline-animation">AI fundamentals</span>, <span className="text-gray-400 underline-animation">data science</span>, <span className="text-gray-400 underline-animation">AI prompt engineering</span>, and <span className="text-gray-400 underline-animation">software development skills</span>, ensuring the ability to create high-performance AI applications. The completion of building generative AI-powered applications and a <span className="text-gray-400 underline-animation">capstone project</span> further demonstrates the practical skills required for real-world AI solutions.
  </p>
  
  <a className="border border-[#64ffda] max-sm:text-[13px] text-[#64ffda] px-6 py-3 rounded mt-9 transition-colors duration-300 sm:text-[13px] hover:bg-[#64ffda] hover:text-[#112240]" href="https://coursera.org/share/40c00deecae88a3e4707023e63bf456c" target="_blank" id="myNameTitle">
    Check This Out!
  </a>
</div>

    <div className="w-full sm:w-1/2 flex flex-col items-start">

     <Image alt="A collection of certification badges" className=" max-sm:hidden sm:block lg:block md:block lg:w-full lg:h-full max-sm:h-[212] max-sm:w-[455]  w-full h-auto rounded-lg sm:h-[240] sm:w-[550]" height="300" src={IbmFullStack} width="400"/>
    </div>
   </div>
   {/* Other certificates */}
   <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2 max-sm:grid-cols-1 lg:h-50">
    {/* <!-- Certification 1 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
<a href="https://www.freecodecamp.org/certification/samiaelamarti/foundational-c-sharp-with-microsoft"  target="_blank">
     <h2 className="text-xl max-sm:text-[15px] font-bold text-[#64ffda] text-center mb-4 sm:text-[17px] ">
      Foundational C# with Microsoft Certification
     </h2>
 
     <Image alt="A collection of certification badges " className="rounded-lg sm:h-[200px] sm:w-[300px]" height="200" src={Microsoft_C} width="300"/>
     </a> </div>
    {/* <!-- Certification 2 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
<a href="https://coursera.org/share/225a43bb9ff92b655d9c439304242425"  target="_blank">
     <h2 className="text-xl font-bold max-sm:text-[15px]  text-[#64ffda] mb-4 text-center sm:text-[17px] ">
       Software Design and Project Management
     </h2>
    
     <Image alt="A collection of certification badges" className=" rounded-lg mb-4 sm:h-[200px] sm:w-[280px]" height="200" src={HonkKongCertificat} width="300"/>
     </a></div>
    {/* <!-- Certification 3 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/c8e906167c7c04f015abcdfd55bb05e0" target="_blank" >

     <h2 className="text-xl max-sm:text-[15px] font-bold text-[#64ffda] mb-4 text-center sm:text-[17px]">
     The Unix Workbench
     </h2>
   
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px]" height="200" src={Unix_WorkbenchCertificat} width="300"/> </a>
    </div>
    {/* <!-- Certification 4 --> */}
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/de7f4eafcd291560efc921692158bd29"  target="_blank">

     <h2 className="text-xl max-sm:text-[15px] font-bold text-[#64ffda] mb-4 text-center sm:text-[17px]">
      
Web Design for Everybody Capstone
     </h2>
    
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px]" height="200" src={WebDesignCertificat} width="300"/></a>
    </div>
    {/* <!-- Certification 5 --> */}
    <div className="bg-[#1d2a4d]  text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/e27897b009a15a01c21b3e1b79c81782"  target="_blank">

     <h2 className=" max-sm:text-[15px] text-xl font-bold text-[#64ffda] mb-4 text-center sm:text-[17px] ">
     React Basics
     </h2>
    
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px]" height="200" src={ReactMeta} width="300"/>
     </a>
    </div>
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/d2d427d204b448b45f6bd5ea30bf8306"  target="_blank">

     <h2 className=" max-sm:text-[15px] text-xl font-bold text-[#64ffda] mb-4 text-center sm:text-[17px]">
     Python for Data Science, AI & Development
     </h2>
    
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px] " height="200" src={Python_AI_Dev} width="300"/>
     </a>
    </div>
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/090f29a2d0dc32510d785397c2cce3d4"  target="_blank">

     <h2 className="max-sm:text-[15px] text-xl font-bold text-[#64ffda] mb-4 text-center sm:text-[17px]">
     Developing Back-End Apps with Node.js and Express
     </h2>
    
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px] " height="200" src={ExpressNode} width="300"/>
     </a>
    </div>
    <div className="bg-[#1d2a4d] text-white p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:shadow-2xl hover:bg-[#1d2a4d] hover:translate-y-[-8px]">
        <a href="https://coursera.org/share/027a3a5a9daaf44c8f1016af97c337b2"  target="_blank">

     <h2 className="max-sm:text-[15px] text-xl font-bold text-[#64ffda] mb-4 text-center sm:text-[17px]">
     Developing AI Applications with Python and Flask
     </h2>
    
     <Image alt="A collection of certification badges" className="rounded-lg mb-4 sm:h-[200px] sm:w-[280px]" height="200" src={PythonFlask} width="300"/>
     </a>
    </div>
   </div>         
      
            </main>
        </>
    );
}