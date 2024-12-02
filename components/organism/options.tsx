"use client";


import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const categories = [
    { id: 1, name: 'Inventario', items: ['Producto A', 'Producto B', 'Producto C'] },
    { id: 2, name: 'Usuarios', items: ['Usuario 1', 'Usuario 2', 'Usuario 3'] },
    { id: 3, name: 'Ventas', items: ['Venta 1', 'Venta 2', 'Venta 3'] },
];

export function Options() {
    const [selected, setSelected] = useState(categories[0]);
    return (
        <>
            <div className="mt-10">
                <Listbox value={selected} onChange={setSelected}>
                    <Label className="block text-sm font-medium leading-6 text-gray-900">Categoría</Label>
                    <div className="relative mt-2">
                        <ListboxButton className="relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="ml-3 block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                            </span>
                        </ListboxButton>

                        <ListboxOptions className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categories.map((category) => (
                                <ListboxOption
                                    key={category.id}
                                    value={category}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                >
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                        {category.name}
                                    </span>

                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-semibold">Lista de {selected.name}:</h3>
                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultados</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {selected.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}