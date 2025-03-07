// components/MobileMenu/MobileMenu.tsx
import Link from 'next/link';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-y-0 right-0 w-1/2 bg-[#112240] p-3 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end mb-4">
                <button onClick={onClose} className="text-[#64ffda]">
                    <i className="fas fa-times text-5xl"></i>
                </button>
            </div>
            <nav className="flex justify-center items-center h-full text-[#64ffda] text-lg">
                <ul className="space-y-10">
                    <li><Link href="#" className="hover:text-[#64ffda]">01. About</Link></li>
                    <li><Link href="#" className="hover:text-[#64ffda]">02. Experience</Link></li>
                    <li><Link href="#" className="hover:text-[#64ffda]">03. Certifications</Link></li>
                    <li><Link href="#" className="hover:text-[#64ffda]">04. Projects</Link></li>
                    <li><Link href="#" className="hover:text-[#64ffda]">05. Contact</Link></li>
                    <li><Link href="#" className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f]">Resume</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;