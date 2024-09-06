import React from 'react';
import Image from 'next/image';
import logo from "../../assets/images/pixelcut-export.png";
import './style.css';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <a href="/home"><Image src={logo} alt="Logo" /></a>
                </div>
                <ul className="options">
                    <li><a href="/home" className='img-home'>Home</a></li>
                    <li><a href="/store">Store</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/register" className="signup-btn">Sign Up</a></li>
                    <li><a href="/login" className="login-btn">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}