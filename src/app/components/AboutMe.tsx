import Image from "next/image";
import pic1 from "./Pic2.jpg";

export default function AboutMe() {
    return (
        <main className=" mb-90 flex max-sm:ml-[-10px] lg:ml-[-50px] max-sm:mt-[80px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row items-start ml-[-15px] md:p-12 lg:gap-12 sm:gap-4 md:ml-[-40px] md:gap-1">
            <div className="md:w-2/3 sm:w-1/2 sm:mx-8 max-sm:w-full">
                   <h1 className="text-[#64ffda] text-xl font-bold mb-4 flex items-center">
                    <span id="Name" className="text-3xl font-[300]">01.</span>
                    <span id="Name" className="text-[#ccd6f6] text-3xl ml-2">About Me</span>
                    <hr className="flex-grow border-t border-[#8892b0bd] ml-4" />
                </h1>
                <p className="mt-9 sm:text-sm lg:text-[16px] text-[#8892b0]  max-sm:text-[15px] ">
                    Hey! My name is Samia and I’m a passionate Software Engineering student, deeply fascinated by Data, AI, and ML. I am constantly excited about exploring new technologies and developing innovative solutions that can make a real impact. With a strong foundation in software engineering and a growing expertise in artificial intelligence and machine learning, I am committed to building applications and systems that drive positive change.
                </p>
                <p className="mt-3 lg:text-[16px] text-md text-[#8892b0] max-sm:text-[15px] ">
                    My focus is on creating impactful software that can transform how people interact with technology. I specialize in designing solutions that cater to a wide range of needs, from personal projects to large-scale enterprise systems. Through a hands-on approach and a strong commitment to high-quality code, I am dedicated to delivering robust, scalable, and user-friendly applications. My goal is to ensure that the solutions I create not only meet but exceed client expectations in performance, usability, and innovation.
                </p>
                <p className="mt-3 lg:text-[16px] text-md text-[#8892b0]  sm:text-sm max-sm:text-[15px]">
                    As I work toward becoming an engineer in 2026 at EMSI: <span className="text-[#64ffda]">École Marocaine des Sciences de l'Ingénieur, Morocco,</span> I am excited to apply my knowledge and skills to make meaningful contributions to the tech industry. I look forward to the opportunities that will allow me to innovate and solve complex problems, leaving a lasting impact.
                </p>
            </div>
            <div className="mt-8  mr-[-85px] md:mr-[0] max-sm:ml-[75] items-center self-center relative max-sm:w-2/4  sm:w-1/3">
            <div className="bg-teal-500 p-0">
                <Image alt="Portrait of Samia, a Software Engineering student" className="w-full h-full object-cover s " height={250} src={pic1} width={250} />
            </div>
            <div className="absolute c top-4 left-4 border-4 border-teal-500 w-full h-full"></div>
    
  </div>
        </main>
    );
}
