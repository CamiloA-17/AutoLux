'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import { colorBgblack, colorTextWhite } from '../tokens';
import { useShoppingCarStore } from '@/store/shoppingCar';
import { getCookie, removeCookie } from 'typescript-cookie';
import { getUidFromToken } from '@/libs/decode_utils';


type HeaderProps = {
    quantity: number;
    showSearch: boolean;
}

export function Header({ quantity, showSearch = true }: HeaderProps) {

    const items = useShoppingCarStore((state) => state.items);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [uid, setUid] = useState<string | null>(null);

    const onShowProducts = () => {
        console.log('Productos en el carrito:', items);
    }

    useEffect(() => {

        const token = getCookie('token');

        setIsLoggedIn(!!token);

        if (token){
            const userId = getUidFromToken(); 
            
            setUid(userId);
            console.log(uid);

        }

    }, []);

    const handleLogout = () => {
        removeCookie('token');
        window.location.reload();
    };



    return (
        <header className={`p-4 ${colorBgblack}`}>
            <nav className="flex justify-between items-center">
                <div className="logo">
                    <a href="/home">
                        <Image src={logo} alt="Logo" className="w-20 h-auto" />
                    </a>
                </div>
                <ul className="flex items-center space-x-6">
                    <li><a href="/home" className={`${colorTextWhite}`} >Home</a></li>
                    <li><a href="/store" className={`${colorTextWhite}`} >Store</a></li>
                    <li><a href="/home/#about" className={`${colorTextWhite}`}>About</a></li>
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <a href="/register" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="/login" className={`${colorTextWhite} px-4 py-2 border border-white rounded-full hover:bg-gray-700 ${colorBgblack}`}>

                                    Login
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                {(

                                    <div className="relative p-3 rounded shadow">
                                        <Image
                                            src='/shopping-cart.svg'
                                            width='20'
                                            height='20'
                                            alt='Icono de carrito de compras'
                                        />
                                        <span className="absolute top-0 right-0 rounded-full p-1 h-4 w-4 text-[12px] flex justify-center items-center font-bold">
                                            {quantity}
                                        </span>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href={`/profile/${uid}`} className={`${colorTextWhite} px-4 py-2 border border-white rounded-full hover:bg-gray-700 ${colorBgblack}`}>
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <button onClick={handleLogout} className={`${colorTextWhite} px-4 py-2 border border-white rounded-full hover:bg-gray-700 ${colorBgblack}`}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )

                    }
                </ul>
            </nav>
        </header>
    );
}

