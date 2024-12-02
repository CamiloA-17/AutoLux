import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { getData } from '@/services/api';
import { User, Vehicle } from '@/types/api';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function Options() {
    const [selected, setSelected] = useState<{ id: number, name: string, items: any[] } | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [cars, setCars] = useState<Vehicle[]>([]);
    const [categories, setCategories] = useState<{ id: number, name: string, items: any[] }[]>([]);
    const t = useTranslations("Options");


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getData<User[]>('/user/');
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const cars = await getData<Vehicle[]>('/vehicle/');
                setCars(cars);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    useEffect(() => {
        const newCategories = [
            { id: 1, name: t("catUsers"), items: users },
            { id: 2, name: t("catCars"), items: cars }
        ];
        setCategories(newCategories);
        setSelected(newCategories[0]);
    }, [users, cars]);

    return (
        <div className="mt-10 p-4 md:p-10">
            <Listbox value={selected} onChange={setSelected}>
                <Label className="block text-sm font-medium leading-6 text-gray-900">{t("category")}</Label>
                <div className="relative mt-2">
                    <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="ml-3 block truncate">{selected ? selected.name : 'Selecciona una categoría'}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        </span>
                    </ListboxButton>

                    <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {categories.map((category) => (
                            <ListboxOption
                                key={category.id}
                                value={category}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                            >
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {category.name}
                                </span>
                                {selected && selected.id === category.id && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[selected]:text-white">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>

            {selected && (
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {selected.name === t('catUsers') ? (
                                    <>
                                        <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("userName")}</th>
                                        <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("userEmail")}</th>
                                        <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("userAge")}</th>
                                    </>
                                ) : (
                                    <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{selected.name}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {selected.items.map((item, index) => (
                                <tr key={index}>
                                    {selected.name === t('catUsers') ? (
                                        <>
                                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
                                            <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-900">{item.age}</td>
                                        </>
                                    ) : (
                                        <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
