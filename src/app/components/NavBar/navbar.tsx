// components/NavBar/NavBar.tsx
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = ({ onToggleMobileMenu }) => {
    return (
        <nav className="flex justify-between items-center px-7 py-3">
            <div className="text-white text-4xl font-bold flex items-center">
                <div className="text-gray-400">{'{'}</div>
                <div className="text-[#64ffda] mx-0">S</div>
                <div className="text-gray-400">{'}'}</div>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-[#64ffda] text-sm">
                <Link href="#" className="hover:text-[#64ffda]">01. <span className="text-[#CCD6F6] hover:text-[#64ffda]">About</span></Link>
                <Link href="#" className="hover:text-[#64ffda]">02. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Experience</span></Link>
                <Link href="#" className="hover:text-[#64ffda]">03. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Certifications</span></Link>
                <Link href="#" className="hover:text-[#64ffda]">04. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Projects</span></Link>
                <Link href="#" className="hover:text-[#64ffda]">05. <span className="text-[#CCD6F6] hover:text-[#64ffda]">Contact</span></Link>
                <Link href="#" className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f]">Resume</Link>
            </div>
            <button onClick={onToggleMobileMenu} className="block lg:hidden text-[#64ffda]">
                <i className="fa-sharp fa-solid fa-bars-staggered text-3xl"></i>
            </button>
        </nav>
    );
};

export default NavBar;