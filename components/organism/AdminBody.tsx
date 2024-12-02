"use client";

import { Metadata } from "next";
import Image from 'next/image';
import profileLogoPage from "../../app/assets/images/profileLogoPage.png";
import { colorTextWhite } from "../tokens";
import { colorTextRed } from "../tokens";

import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Asideprofile } from "../molecules/Asideprofile";
import { Options } from "../organism/options";


export function AdminBody() {

    return (
        <>
            <div className="flex flex-col min-h-screen m-10">
                <main className="flex flex-1">
                    <Asideprofile />
                    <section className="flex-1 p-10">
                        <div className="flex items-start">
                            <div>
                                <h2 className="text-[50px] font-bold">¡Hola!</h2>
                                <h3 className="text-[40px] font-semibold m-2 underline">
                                    nombre usuario
                                </h3>
                            </div>

                            <div className="ml-auto mr-auto">
                                <a className="flex justify-center w-[300px]" href="/profile">
                                    <Image src={profileLogoPage} alt="Logo" className="rounded-full" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-2xl font-bold mb-6">Mi información</h3>
                            <ul className="space-y-4 text-lg">
                                <li>
                                    <strong>Nombre usuario:</strong> Juan Pérez
                                </li>
                                <li>
                                    <strong>Teléfono:</strong> (123) 456-7890
                                </li>
                                <li>
                                    <strong>Correo electrónico:</strong> usuario@example.com
                                </li>
                                <li>
                                    <strong>Identificación:</strong> 123456789
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
            <Options />
        </>
    );
}
