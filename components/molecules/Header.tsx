import React from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import { colorBgblack } from '../tokens';
import { colorTextWhite } from '../tokens';

export function Header() {
    return (
        <header className = {`p-4 ${colorBgblack}`}>
            <nav className="flex justify-between items-center">
                <div className="logo">
                    <a href="/home">
                        <Image src={logo} alt="Logo" className="w-20 h-auto" />
                    </a>
                </div>
                <ul className="flex items-center space-x-6">
                    <li><a href="/home" className = {`${colorTextWhite}`} >Home</a></li>
                    <li><a href="/store" className= {`${colorTextWhite}`} >Store</a></li>
                    <li><a href="/about" className= {`${colorTextWhite}`} >About</a></li>
                    <li>
                        <a href="/register" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300">
                            Sign Up
                        </a>
                    </li>
                    <li>
                        <a href="/login" className = {`${colorTextWhite} px-4 py-2 border border-white rounded-full hover:bg-gray-700 ${colorBgblack}`}>
                        
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

