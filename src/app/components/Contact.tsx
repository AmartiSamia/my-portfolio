import { useState } from 'react';

export default function Contacts() {
    const [emailVisible, setEmailVisible] = useState(false);

    const click = (e) => {
        e.preventDefault();  // Prevent the default anchor link behavior
        setEmailVisible(true);  // Set state to show the email when clicked
    }

    return (
        <>
            <main id="contact" className="bg-[#0a192f] mt-90 text-white flex items-center justify-center min-h-screen">
                <div className="text-center px-4">
                    <p className="text-[#64ffda] text-sm md:text-base mb-2"> What's Next?</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">Get In Touch</h1>
                    <p className="text-[#8892b0] text-base md:text-lg mb-8">
                        Don't be shy! Hit me up!
                    </p>
                   
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/samia-el-amarti" target="_blank" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-transform duration-300 hover:shadow-2xl  hover:translate-y-[-8px]">
                            <i className="fab fa-linkedin mr-2 text-[#64ffda]"></i>
                            LinkedIn
                        </a>
                        <a href="#" onClick={click} id="Email" className="bg-gray-800 hover:bg-gray-700 text-[white] font-bold transition-transform duration-300 hover:shadow-2xl  hover:translate-y-[-8px] py-2 px-4 rounded inline-flex items-center">
                            <i className="fas fa-envelope mr-2 text-[#64ffda]"></i>
                            Email
                        </a>
                    </div> {/* Conditionally render the email */}
                    {emailVisible && (
                        <p className="text-[#64ffda] text-lg md:text-xl mb-4 mt-5">
                            samia.elamarti11@gmail.com
                        </p>
                    )}
                </div>
            </main>
        </>
    );
}
