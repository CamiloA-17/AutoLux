'use client';

import { useEffect, useState } from 'react';
import { Card, SearchBar } from '@/components';
import { Vehicle, Brand } from '@/types/api';
import { getData } from '@/services/api';
import { LateralList } from '../molecules/LateralList';

export function StoreManagement() {
    const [carsData, setCarsData] = useState<Vehicle[]>([]);
    const [filteredCars, setFilteredCars] = useState<Vehicle[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        filterCars();
    }, [selectedBrand, searchQuery, carsData]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const cars = await getData<Vehicle[]>('/vehicle/');
                setCarsData(cars);
                setFilteredCars(cars);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchVehicles();
    }, []);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const brands = await getData<Brand[]>('/brand/');
                setBrands(brands);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);

    const filterCars = () => {
        const result = carsData.filter((car) => {
            const matchesBrand = selectedBrand == null || car.marcaId == selectedBrand;
            console.log();
            
            const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesBrand && matchesSearch;
        });
        setFilteredCars(result);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query); 
    };

    const handleFilterClick = (id: number) => {
        setSelectedBrand(id); 
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-4">
            <aside className="bg-gray-100 p-6 w-full lg:w-1/4">
                <LateralList filters={brands} title="Marcas" onFilterClick={handleFilterClick} />
            </aside>
            <section className="w-full lg:w-3/4">
                <SearchBar onSearch={handleSearch} />
                <div className="flex flex-wrap flex-1 gap-5 p-5">
                    {filteredCars.map((car) => (
                        <Card key={car.id} vehicle={car} updateQuantity={() => { }} />
                    ))}
                </div>
            </section>
        </div>
    );
}
