export default function Contacts() {
    return (
        <>
           <main id="contact" className="bg-[#0a192f] text-white flex items-center justify-center min-h-screen">
    <div className="text-center px-4">
        <p className="text-[#64ffda] text-sm md:text-base mb-2">04. What's Next?</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">Get In Touch</h1>
        <p className="text-[#8892b0] text-base md:text-lg mb-8">
        Don't be shy! Hit me up! 
        </p>
       
        <div className="flex justify-center space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <i className="fab fa-linkedin mr-2 text-[#64ffda]"></i>
                LinkedIn
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-[white] font-bold py-2 px-4 rounded inline-flex items-center">
                <i className="fas fa-envelope mr-2 text-[#64ffda]"></i>
                Email
            </a>
           
</div>

    </div>
</main>

        </>
    );
}
