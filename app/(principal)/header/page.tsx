import React from 'react'
import Image from 'next/image';
import logo from "../../assets/images/pixelcut-export.png"
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/home"><Image src={logo} alt="Logo" /></a></li>
                    <div className="options">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/store">Store</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/signup" className="signup-btn">Sign Up</a></li>
                        <li><a href="/login" className="login-btn">Login</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
