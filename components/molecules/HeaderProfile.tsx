import React from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import logoProfile from "../../app/assets/images/profileLogo.png";
import { colorBgblack } from "../tokens";


export function HeaderProfile() {
    return (
        <header className={`bg-custom-gray p-4 ${colorBgblack}`}>
            <nav className={`flex justify-between items-center`}>
                <div className="logo">
                    <a href="/">
                        <Image src={logo} alt="Logo" className="w-20 h-auto" />
                    </a>
                </div>
                <ul className="flex items-center space-x-6">
                    <li><a href="/home" className='text-white hover:text-gray-300'>Home</a></li>
                    <li><a href="/store" className='text-white hover:text-gray-300'>Store</a></li>
                    <li><a href="/about" className='text-white hover:text-gray-300'>About</a></li>
                    <a >
                        <Image src={logoProfile} alt="Logo" className="w-10 h-auto" />
                    </a>
                </ul>

            </nav>
        </header>
    );
}
