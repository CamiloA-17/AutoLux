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
                setBrands([{ id: 0, name: 'Todos', countryId: 0, yearOfEstablishment: 0, image: '' }, ...brands]);

            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);

    const filterByBrand = (cars: Vehicle[], brand: number | null) => {
        return cars.filter((car) => {
            return brand === 0 || car.marca_id === brand || brand === null;
        });
    };

    const filterBySearchQuery = (cars: Vehicle[], query: string) => {
        return cars.filter((car) => {
            return car.name.toLowerCase().includes(query.toLowerCase());
        });
    };


    useEffect(() => {
        filterCars();
    }, [selectedBrand, searchQuery, carsData]);

    const filterCars = () => {
        let result = carsData;

        result = filterByBrand(result, selectedBrand);

        if (searchQuery) {
            result = filterBySearchQuery(result, searchQuery);
        }

        setFilteredCars(result);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterClick = (id: number) => {
        setSelectedBrand(id);
        setSearchQuery('');
    };

    return (
        <div className="flex flex-col lg:flex-row flex-1 min-h-screen p-4 w-full">
            <aside className="bg-gray-100 p-6 lg:w-64">
                <LateralList filters={brands} title="Marcas" onFilterClick={handleFilterClick} />
            </aside>
            <section className="w-full lg:w-3/4 flex-grow">
                <SearchBar onSearch={handleSearch} />
                <div className="flex flex-wrap gap-5 p-5">
                    {filteredCars.map((car) => (
                        <Card key={car.id} vehicle={car} updateQuantity={() => { }} />
                    ))}
                </div>
            </section>

        </div>
    );
}