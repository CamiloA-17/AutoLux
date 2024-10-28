'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import profileIcon from "../../app/assets/images/profileLogo.png";
import { colorBgblack, colorTextWhite } from '../tokens';
import { useShoppingCarStore } from '@/store/shoppingCar';
import { getCookie, removeCookie } from 'typescript-cookie';
import { getUidFromToken } from '@/libs/decode_utils';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from './Language';

type HeaderProps = {
    quantity: number;
    showSearch: boolean;
}

export function Header({ quantity, showSearch = true }: HeaderProps) {
    const items = useShoppingCarStore((state) => state.items);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [uid, setUid] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const t = useTranslations("Header");

    useEffect(() => {
        const token = getCookie('token');
        setIsLoggedIn(!!token);
        if (token) {
            const userId = getUidFromToken(); 
            setUid(userId);
        }
    }, []);

    const handleLogout = () => {
        removeCookie('token');
        window.location.reload();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
                    <li><a href="/home" className={`${colorTextWhite}`}>{t("home")}</a></li>
                    <li><a href="/store" className={`${colorTextWhite}`}>{t("store")}</a></li>
                    <li><a href="/home/#about" className={`${colorTextWhite}`}>{t("about")}</a></li>
                    <li>
                        <LanguageSelector />
                    </li>
                    
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <a href="/register" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300">
                                    {t("sign_up")}
                                </a>
                            </li>
                            <li>
                                <a href="/login" className={`${colorTextWhite} px-4 py-2 border border-white rounded-full hover:bg-gray-700 ${colorBgblack}`}>
                                    {t("login")}
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="relative">
                                <button onClick={toggleDropdown} className="flex items-center">
                                    <Image src={profileIcon} alt="Profile Icon" className="w-8 h-8 rounded-full" />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                        <a href={`/profile/${uid}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {t("profile")}
                                        </a>
                                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {t("logout")}
                                        </button>
                                    </div>
                                )}
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
