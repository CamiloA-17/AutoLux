'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import profileIcon from "../../app/assets/images/profileLogo.png";
import { colorBgblack, colorTextWhite } from '../tokens';
import { getCookie, removeCookie } from 'typescript-cookie';
import { useRouter } from "next/navigation";
import { getUidFromToken } from '@/utils/decode_utils';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from './Language';

export function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [uid, setUid] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const t = useTranslations("Header");

    useEffect(() => {
        const token = getCookie('token');
        setIsLoggedIn(!!token);
        if (token) {
            const userId = getUidFromToken();
            setUid(userId);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogout = () => {
        router.replace('/home');
        removeCookie('token');
        window.location.reload();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToProfile = () => {
        router.push(`/profile/${uid}`);

    };

    return (
        <header className={`p-4 ${colorBgblack}`}>
            <nav className="flex flex-col md:flex-row justify-between items-center">
                <div className="logo">
                    <a href="/home">
                        <Image src={logo} alt="Logo" className="w-20 h-auto" />
                    </a>
                </div>

                <button
                    className="md:hidden text-xl text-white p-6"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>

                <ul
                    className={`w-full md:w-auto flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"
                        }`}
                >
                    <li className="h-12 flex items-center">
                        <a href="/home" className={`${colorTextWhite} flex items-center h-full}`}>{t("home")}</a>
                    </li>
                    <li className="h-12 flex items-center">
                        <a href="/cars" className={`${colorTextWhite} flex items-center h-full}`}>{t("cars")}</a>
                    </li>
                    <li className="h-12 flex items-center">
                        <a href="/home/#about" className={`${colorTextWhite} flex items-center h-full}`}>{t("about")}</a>
                    </li>
                    <li className="h-12 flex items-center">
                        <LanguageSelector />
                    </li>
                    {!isLoggedIn ? (
                        <>
                            <li className="h-12 flex items-center">
                                <a
                                    href="/register"
                                    className="bg-white text-gray-900 px-4 py-2 border rounded-full hover:bg-gray-300 h-full flex items-center"
                                >
                                    {t("sign_up")}
                                </a>
                            </li>
                            <li className="h-12 flex items-center">
                                <a
                                    href="/login"
                                    className={`${colorTextWhite} border-white rounded-full px-4 py-2 border hover:bg-gray-700 ${colorBgblack} h-full flex items-center`}
                                >
                                    {t("login")}
                                </a>
                            </li>
                        </>
                    ) : (
                        <li className="h-12 flex items-center relative">
                            <button onClick={toggleDropdown} className="flex items-center h-full">
                                <Image src={profileIcon} alt="Profile Icon" className="w-8 h-8 rounded-full" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                    <button
                                        onClick={goToProfile}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                    >
                                        {t("profile")}
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                    >
                                        {t("logout")}
                                    </button>
                                </div>
                            )}
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
