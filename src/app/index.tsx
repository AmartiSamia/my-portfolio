// pages/index.tsx
'use client'
import { useState } from 'react';
import Head from 'next/head';
import NavBar from '../app/components/NavBar/Navbar';
import MobileMenu from '../app/components/NavBar/MobileMenu';

const Home = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-[#0a192f] text-white p-5 lg:px-11 sm:p-1 sm:pt-4">
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar onToggleMobileMenu={toggleMobileMenu} />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
            <div id="content">
                {/* Your main content goes here */}
                ddfdd
            </div>
        </div>
    );
};

export default Home;