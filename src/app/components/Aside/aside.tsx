export default function Aside() {
    return (
        <>
            <aside className="fixed bottom-0 left-10 md:ml-[-10px] flex flex-col items-center space-y-10 lg:block sm:hidden">
                <ul className="space-y-6 ml-[-10px] ">
                    {/* GitHub */} 
                    <li>
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
                                className="feather feather-github w-6 h-6 text-[#ffffffe4] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300"
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    </li>
                    {/* Instagram */}
                    <li>
                        <a href="https://www.instagram.com/bchiang7" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-instagram w-6 h-6 text-[#ffffffe4] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300"
                            >
                                <title>Instagram</title>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>
                    {/* Gmail */}
                    <li>
                    <a href="mailto:brittany.chiang@gmail.com" aria-label="Gmail">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-[#ffffffe4] hover:text-[#64ffda] transition-transform duration-300 hover:scale-110"
                        >
                            <title>Gmail</title>
                            <path fill="currentColor" d="M2 4v16h20V4H2zm18 2v.511l-8 5.978-8-5.978V6h16zm-16 2.222l8 5.978 8-5.978V18H4V8.222z"></path>
                        </svg>
                    </a>
                </li>


                    {/* LinkedIn */}
                    <li>
                        <a href="https://www.linkedin.com/in/bchiang7" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-linkedin w-6 h-6 text-[#ffffffe4] hover:text-[#64ffda] transform hover:scale-110 transition-all duration-300 "
                            >
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </li>
                </ul>

                <div className="w-px h-31 bg-[#ffffffe4]"></div>
            </aside>
            <aside className="fixed bottom-0 right-0  md:right-[-50] mr-[-20px] flex flex-col items-center space-y-29">
                <a href="mailto:brittany.chiang@gmail.com" className="text-[#ffffffe4] hover:text-[#64ffda] transform rotate-90 transition-all duration-300 lg:block sm:hidden">
                    samia.elamarti11@gmail.com
                </a>
                <div className="w-px h-24 bg-gray-400"></div>
            </aside>
        </>
    );
}
