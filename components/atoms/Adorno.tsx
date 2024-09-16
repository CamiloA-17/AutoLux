import React from 'react';
import Image from 'next/image';
import flecha from "../../app/assets/images/flecha_abajo.png";

export function Adorno() {
    return (
        <div className="justify-center flex">
            <Image src={flecha} alt="flecha" className="w-30 h-auto" />
        </div>
    );
}