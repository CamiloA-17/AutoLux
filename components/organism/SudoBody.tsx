"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profileLogoPage from "../../app/assets/images/profileLogoPage.png";
import { colorTextWhite } from "../tokens";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { createUser, getUsers } from '@/utils/api_users';
import UserTable from './UserTable';
import { Category, User, UserRole } from '@/types/api_general';
import { CategorySelector } from '../molecules/CategorySelector';
import UserForm from '../molecules/UserForm';

const categories = [
    { id: 1, name: 'Inventario', items: ['Producto A', 'Producto B', 'Producto C'] },
    { id: 2, name: 'Usuarios', items: [] },
    { id: 3, name: 'Ventas', items: ['Venta 1', 'Venta 2', 'Venta 3'] },
];

export function SudoBody() {
    const [selected, setSelected] = useState<Category>(categories[0]);
    const [users, setUsers] = useState<User[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newUser, setNewUser] = useState<User>({ id: '', name: '', email: '', role: { id: '1', nombre: '', descripcion: '' }, password: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            const usersArray = await getUsers();
            setUsers(usersArray);
        };

        if (selected.name === 'Usuarios') {
            fetchUsers();
        }
    }, [selected.name]);

    const handleAddButtonClick = () => {
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
        setNewUser({ id: '', name: '', email: '', role: { id: '', nombre: '', descripcion: '' }, password: '' });
    };

    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        if (name === "role") {
            setNewUser ((prev) => ({
                ...prev,
                role: { id: value, nombre: "", descripcion: "" },
            }));
        } else {
            setNewUser ((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await createUser(newUser.name, newUser.id, newUser.email, newUser.password, newUser.role.id);
        if (response.success) {
            console.log('Usuario creado:', response.message);
            handleFormClose();
        } else {
            console.error('Error al crear el usuario:', response.message);
        }
    };
    

    return (
        <>
            <div className="mx-5 my-10">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center px-10 py-10">
                        <a className="flex justify-center w-[250px]" href="/profile">
                            <Image src={profileLogoPage} alt="Logo" className="" />
                        </a>
                        <h2 className={`mt-5 text-2xl font-extrabold text-center text-[#424242]`}>
                            SuperAdministrador
                        </h2>
                    </div>

                    <button
                        type="submit"
                        className={`flex w-[300px] h-[77px] justify-center items-center rounded-md bg-[#424242] ml-[300px] px-3 py-1.5 text-lg font-extrabold leading-6 ${colorTextWhite} shadow-sm hover:bg-indigo-500`}
                    >
                        Editar Perfil
                    </button>
                </div>

                <CategorySelector categories={categories} selected={selected} onSelect={setSelected} />

                {selected.name === 'Usuarios' && (
                    <>
                        <button
                            onClick={handleAddButtonClick}
                            className="mt-5 mb-5 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Añadir Usuario
                        </button>
                        <UserTable users={users} selectedName={selected.name} />
                    </>
                )}

                {isFormOpen && (
                <UserForm
                    newUser={newUser}
                    onChange={handleChange}
                    onClose={handleFormClose}
                    onSave={handleFormSubmit}
                />
                )}
            </div>
        </>
    );
}
