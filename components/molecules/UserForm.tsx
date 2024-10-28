import React from 'react';
import { User } from '@/types/api_general';

type UserFormProps = {
    newUser: {
        name: string;
        email: string;
        id: string; 
        role: {
            nombre: string;
        };
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; 
    onClose: () => void;
    onSave: (e: React.FormEvent) => void;
};

const UserForm: React.FC<UserFormProps> = ({ newUser, onChange, onClose, onSave }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Nuevo Usuario</h2>
            <form onSubmit={onSave}>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={onChange}
                    className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />

                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={onChange}
                    className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />

                <label className="block text-sm font-medium text-gray-700">Identificación</label>
                <input
                    type="text"
                    name="id"
                    value={newUser.id}
                    onChange={onChange}
                    className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />

                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={onChange}
                    className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />

                <label className="block text-sm font-medium text-gray-700">Rol</label>
                <select
                    name="role.nombre"
                    value={newUser.role.nombre}
                    onChange={onChange}
                    className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="/roles/1">Sudo</option>
                    <option value="/roles/2">User</option>
                    <option value="/roles/3">Admin</option>
                </select>

                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default UserForm;