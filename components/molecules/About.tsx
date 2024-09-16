import React from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";

export function About() {
    return (
        <div className="bg-gray-100 py-10 px-10 my-10">
            <div className="container mx-auto flex items-center space-x-20">
                <div className="flex-shrink-0">
                    <Image src={logo} alt="Autolux Logo" className="w-60 h-auto" />
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