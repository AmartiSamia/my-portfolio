import React, { useState, useEffect } from 'react';

export default function Accroche() {
  const texts = ["Software Engineering Student", "Data Enthusiast", "AI & ML Enthusiast"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  
  const speed = 100;

  useEffect(() => {
    const typingEffect = setInterval(() => {
      const currentPhrase = texts[textIndex];
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
      } else {
        setCharIndex(prev => prev + 1);
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 50);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, speed);

    return () => clearInterval(typingEffect);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      <main className="flex flex-col max-sm:ml-[-20px]  max-sm:mt-[60px] items-start justify-center sm:ml-7 mt-25 px-6 md:px-20 lg:ml-[-49px] relative ">
        <div className="try ">
        <img
  alt=""
  className="chakra-image css-1eozjqx lg:ml-[-151px] sm:ml-[-120px] sm:max-w-[130px] md:ml-[-70px] lg:max-w-[400px] max-sm:ml-[-180px] max-sm:mt-[10px]"
  src="https://svgsilh.com/svg/26432.svg"
/>

          <p id="Name" className="text-[#64ffda] mb-4 text-[20px]">Hey there!, my name is-</p>
       
          <div className="FontChange ">
            <h1 className="lg:text-[80px] md:text-7xl sm:text-6xl font-bold text-[#ccd6f6] max-sm:text-6xl mb-5">Samia El Amarti.</h1>
          </div>
          <h2  id="Name"  className="md:text-5xl mt-11 sm:text-3xl font-bold text-[#8892b0] max-sm:text-3xl">I'm {currentText}.</h2>
          
        </div>
        <p id="Name" className="text-gray-400 max-w-3xl mb-10 sm:max-w-120 lg:max-w-3xl sm:text-sm mt-10 lg:text-lg">
      Fuelled by passion, I turn challenges into opportunities. And as a 
      <span className="border-b-2 border-[#8892b0]"> future IT engineer</span>, I’m focused on transforming ideas into reality.
    </p>

     
        <a id="myNameTitle" href="#" className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded">Contact me!</a>
      </main>
    </>
  );
}