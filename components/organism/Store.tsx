'use client';

import { useEffect, useState } from 'react';
import { Card, SearchBar } from '@/components';
import lamborghini from '../../app/assets/images/lamborghini-revuelto.svg';
import jaguar from '../../app/assets/images/f-type-r-dynamic.svg';
import ferrari from '../../app/assets/images/ferrari-812-superfast.jpg';
import { Vehicle } from '@/types/api_general';
import { getVehicles } from '@/libs/api_vehicles';

const carsDataHard = [
    {
        id: 1,
        name: 'Lamborghini Revuelto',
        model: 'Revuelto',
        zeroToHundredTime: 2.5,
        horsepower: 825,
        maxSpeed: 350,
        engine: 'Motor de combustión interna V12 6.5L',
        image: lamborghini,
    },
    {
        id: 2,
        name: 'Lamborghini Revuelto',
        model: 'Revuelto',
        zeroToHundredTime: 2.5,
        horsepower: 825,
        maxSpeed: 350,
        engine: 'Motor de combustión interna V12 6.5L',
        image: lamborghini,
    },
    {
        id: 3,
        name: 'Lamborghini Revuelto',
        model: 'Revuelto',
        zeroToHundredTime: 2.5,
        horsepower: 825,
        maxSpeed: 350,
        engine: 'Motor de combustión interna V12 6.5L',
        image: lamborghini,
    }
];

export function StoreManagement() {
    const [carsData, setCarsData] = useState<Vehicle[]>([]);
    const [filteredCars, setFilteredCars] = useState<Vehicle[]>([]);

    useEffect(() => {
        getVehicles()
        .then((data: Vehicle[]) => {
            setCarsData(data);
        })
        .catch((e) => {
            alert('Error al consultar la informacion del api')
        })
    }, [])

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
                {carsDataHard.map((car) => (
                    <Card key={car.id} vehicle={car} updateQuantity={() => {}} />
                ))}
            </main>
        </div>
    );
}
