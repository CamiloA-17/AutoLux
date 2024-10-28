'use client';

import { useEffect, useState } from 'react';
import { Card, SearchBar } from '@/components';
import { Vehicle } from '@/types/api_general';
import { getVehicles } from '@/libs/api_vehicles';

export function StoreManagement() {
    const [carsData, setCarsData] = useState<Vehicle[]>([]);
    const [filteredCars, setFilteredCars] = useState<Vehicle[]>([]);

    useEffect(() => {
        getVehicles()
            .then((data: Vehicle[]) => {
                setCarsData(data);
                setFilteredCars(data);
            })
            .catch((e) => {
                alert('Error al consultar la información del API');
            });
    }, []);

    const handleSearch = (query: string) => {
        const result = carsData.filter((car) =>
            car.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCars(result);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            
            <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-evenly gap-10">
                {filteredCars.map((car) => (
                    <Card key={car.id} vehicle={car} updateQuantity={() => {}} />
                ))}
            </main>
        </div>
    );
}

