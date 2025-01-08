"use client";

import { useState } from 'react';
import Logo from '../ui/logo';
import SocialMedia from '../ui/socialMedia';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavMenu from "./nav";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState('/');
    
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
    
        const closeMenu = () => {
            setIsOpen(false);
        };
    
    return (
        <section className="relative flex flex-col items-center justify-between bg-lightYellow">
            <div className="container flex justify-between py-4"> 
                <Logo />
                <div className="flex items-center gap-4 font-semibold"> 
                    <SocialMedia forMobile />
                     <button
                        onClick={toggleMenu}
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        className="block md:hidden text-primary text-2xl p-2 z-50"
                    >
                        {isOpen ? <FaTimes className='icon' /> : <FaBars className='icon' />}
                    </button>
                    <NavMenu 
                        className="hidden md:flex items-center gap-8"
                        activeRoute={activeRoute}
                        setActiveRoute={setActiveRoute}
                        onClick={closeMenu}
                    />
                </div>
            </div>
            {isOpen && (
                <div className='block md:hidden w-full bg-[#FFE4B8]'>
                    <NavMenu 
                        className="flex flex-col items-center gap-4 py-4" 
                        activeRoute={activeRoute}
                        setActiveRoute={setActiveRoute}
                        onClick={closeMenu}
                    />
                </div>
                
                
                )}
        </section>
    );
}
