"use client";

import React from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import { colorBggray } from '../tokens';
import { useRef, useEffect } from 'react';

export function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScrollToAbout = () => {
            if (window.location.hash === '#about') {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleScrollToAbout);
        handleScrollToAbout();

        return () => {
            window.removeEventListener('hashchange', handleScrollToAbout);
        };
    }, []);

    return (
        <div id="about" className={`${colorBggray} py-10 px-10 my-10`} ref={aboutRef}>
            <div className="container mx-auto flex items-center space-x-20">
                <div className="flex-shrink-0">
                    <Image src={logo} alt="Autolux Logo" className="w-60 h-auto" priority />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">AutoLux</h1>
                    <p className="mt-4 text-gray-600 max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
            </div>
        </div>
    );
}