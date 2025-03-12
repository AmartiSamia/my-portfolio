import Image from "next/image";
import image from '../Projects/screen.png';
export default function Projects(){
  
    return(<>
    <main className="mb-90 flex lg:mt-[-120px] lg:ml-[-35px] max-sm:mt-[-160px]   lg: flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row items-start ml-[-15px] md:p-12 lg:gap-12 sm:gap-4 md:ml-[-40px] md:gap-1">
    
    
    
    
    <div className="md:w-3/3  sm:mx-8 max-sm:w-full">
      <h1 className="text-[#64ffda] text-xl font-bold mb-4 flex items-center">
        <span id="Name" className="text-3xl font-[300] max-sm:text-[24px]">03.</span>
        <span id="Name" className="text-[#ccd6f6] text-3xl ml-2 sm:text-2xl max-sm:text-[24px]">Some Things I’ve Built</span>
        <hr className="flex-grow border-t border-[#8892b0bd] ml-4 max-sm:ml-[5px] max-sm:mr-[9px] mr-[70px] " />
      </h1>
{/* Container */}
<div className="flex flex-col max-sm:ml-[-28px]   md:mx-[70px] lg:mx-[30px] lg:ml-[80px]  md:flex-row items-center md:items-start mt-[50px] ml-[65px]">
    <div className="md:w-1/2 mb-6 md:mb-0 transition-all ease-in-out  md:ml-[-80px] max-sm:ml-[100px] max-sm:mr-[50px]"><a href="">
   {/* The div for sm et max-sm et md */}
    <div className=" mb-6 md:mb-0 transition-all ease-in-out lg:hidden sm:block relative group md:mx-28 sm:mx-[-28]">
   <a href="">

    <div className="relative inline-block w-[436px] max-sm:w-[390px]">
     <Image alt="Screenshot of Halcyon theme in VS Code, showing code editor with dark blue theme" className=" rounded-lg shadow-lg filter transition transform hover:scale-110 lg:block duration-400 sm:w-[400px]  sm:ml-9 lg:w-[500px]" height={530} src={image} width={500}/>
     <div className="absolute sm:ml-[38px] max-sm:w-[390px] inset-0 bg-[#112240] bg-opacity-50 flex items-center justify-center opacity-85 group-hover:opacity-0 transition-opacity duration-300 rounded-lg ">
  
      <p className="text-[#a8b2d1] mb-2 lg:text-right sm:text-[14px] max-sm:text-[15px] transition-all duration-500 underline-offset-5 ease-in-out p-4">
      <div className="lg:hidden sm:block  sm:text-[17px] text-center text-[#64ffda] lg:text-2xl font-semibold mb-5 " id="Name">
     VisionText - AI-Driven Text-to-Image Platform
    </div>
       VisionText is an AI-powered platform that generates images based on textual descriptions. The platform uses the
       <span className="text-[#64ffda] underline-animation">
        Stable Diffusion model
       </span>
       to generate images in real time, offering content creators and designers an intuitive interface. Developed with Django and Django REST Framework, it seamlessly handles API requests, while the frontend is built using React. Additionally, PyTorch and the Hugging Face API are used for AI capabilities.
       <div id="Name" className="flex space-x-4 sm:mt-[15px] max-sm:mt-[-3px] text-gray-200 sm:mb-4 max-sm:mb-3 justify-center ">
              <span>
                React
              </span>
              <span>
                Django
              </span>
              <span>
                PyTorch
              </span>
              <span className="">
                Hugging Face
              </span>
              
            </div>
     <div className="flex space-x-4 text-gray-400 justify-center" >
     <a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github w-5 h-5 text-[white] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300"
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://your-project-link.com" aria-label="External Link" target="_blank" rel="noreferrer">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-external-link w-5 h-5 text-[white] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300 "
    >
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
</a>

     </div> </p>
      
     </div>
     
    </div>
   </a>
   
  </div>
  {/* Container for lg  */}
     <div className="sm:hidden lg:block sm:w-[500px] sm:h-[530px] max-sm:hidden">
    <div
  style={{
    position: 'relative',
    display: 'inline-block',
    width: 500,
    height: 530,
  }}
>
  <Image
    alt="Screenshot of Halcyon theme in VS Code, showing code editor with dark blue theme"
    className="rounded-lg shadow-lg filter transition transform hover:scale-110 lg:block duration-400 sm:w-[400px] sm:ml-9 lg:w-[500px]"
    height={200}
    src={image}
    width={500}
  />
</div>
</div>
      </a>
    </div>
    <div className="lg:block max-sm: hidden sm:hidden md:w-2/2 md:pl-8 z-10 lg:mr-[-95px] transition-all sm:mt-[-180px]  lg:mt-[30px] duration-200">
     <h2 className="text-[#64ffda] sm:hidden text-2xl lg:block font-semibold mb-5 lg:text-right mt-5 ">
     VisionText - AI-Driven Text-to-Image Platform
     </h2>

     <div className="bg-[#112240] p-4 rounded-lg shadow-lg mb-4 transition transform hover:shadow-gray-900 duration-400">
      <p className="text-[#a8b2d1]max-sm: hidden mb-2 lg:text-right sm:text-[15px] transition-all duration-500 underline-offset-5 ease-in-out">
      VisionText is an AI-powered platform that generates images based on textual descriptions. The platform uses the  <span className="text-[#64ffda] underline-animation">Stable Diffusion model</span>  to generate images in real time, offering content creators and designers an intuitive interface. Developed with Django and Django REST Framework, it seamlessly handles API requests, while the frontend is built using React. Additionally, PyTorch and the Hugging Face API are used for AI capabilities.
      
      </p>
     </div>
     <div id="Name" className="flex space-x-4 text-gray-400 mb-4 justify-end">
              <span >
                React
              </span>
              <span>
                Django
              </span>
              <span>
                PyTorch
              </span>
              <span className="">
                Hugging Face
              </span>
              
            </div>
     <div className="flex space-x-4 text-gray-400 justify-end">
     <a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github w-5 h-5 text-[white] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300"
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://your-project-link.com" aria-label="External Link" target="_blank" rel="noreferrer">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-external-link w-5 h-5 text-[white] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300 "
    >
        <title>External Link</title>
        <path d="M18 13v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
</a>

     </div>
    </div>
    </div>
   </div>
  
   </main>
  </>);
}