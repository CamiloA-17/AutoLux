'use client';

import { useState } from 'react';
import { Card, SearchBar } from '@/components';
import lamborghini from '../../app/assets/images/lamborghini-revuelto.svg';
import jaguar from '../../app/assets/images/f-type-r-dynamic.svg';
import ferrari from '../../app/assets/images/ferrari-812-superfast.jpg';

const carsData = [
    {
        idCard: '1',
        name: 'Lamborghini Revuelto',
        time: '2.5',
        timeText: 'Aceleración 0-100km/h (segundos)',
        horsepower: '825/9250',
        horsepowerText: 'Potencia máxima (CV/rpm)',
        topSpeed: '350km/h',
        engine: 'Motor de combustión interna V12 6.5L',
        carImage: lamborghini,
    },
    {
        idCard: '2',
        name: 'Ferrari 812 Superfast',
        time: '2.9',
        timeText: 'Aceleración 0-100km/h (segundos)',
        horsepower: '800/8500',
        horsepowerText: 'Potencia máxima (CV/rpm)',
        topSpeed: '340km/h',
        engine: 'Motor de combustión interna V12 6.5L',
        carImage: ferrari,
    },
    {
        idCard: '3',
        name: 'Jaguar F-Type',
        time: '5.9',
        timeText: 'Aceleración 0-100km/h (segundos)',
        horsepower: '300/5500',
        horsepowerText: 'Potencia máxima (CV/rpm)',
        topSpeed: '285km/h',
        engine: 'Motor de combustión interna V8 5L',
        carImage: jaguar,
    }
];

export function StoreManagement() {
    const [filteredCars, setFilteredCars] = useState(carsData);

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
                    <Card key={car.idCard} {...car} />
                ))}
            </main>
        </div>
    );
}
