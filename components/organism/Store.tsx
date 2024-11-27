'use client';

import { useState } from 'react';
import { Card, SearchBar } from '@/components';
import { Vehicle } from '@/types/api_general';
import { getVehicles } from '@/utils/api_vehicles';

export function StoreManagement() {
    const initialCarsData: Vehicle[] = [
        {
            id: 1,
            name: 'Car A',
            model: 'Model A',
            zero_to_hundred_time: 3.5,
            horsepower: 450,
            max_speed: 320,
            engine: 'V8',
            image: 'imageA.jpg'
        },
        {
            id: 2,
            name: 'Car B',
            model: 'Model B',
            zero_to_hundred_time: 4.0,
            horsepower: 400,
            max_speed: 300,
            engine: 'V6',
            image: 'imageB.jpg'
        },
        {
            id: 3,
            name: 'Car C',
            model: 'Model C',
            zero_to_hundred_time: 3.2,
            horsepower: 500,
            max_speed: 350,
            engine: 'V8',
            image: 'imageC.jpg'
        },
        {
            id: 4,
            name: 'Car D',
            model: 'Model D',
            zero_to_hundred_time: 3.8,
            horsepower: 420,
            max_speed: 310,
            engine: 'V6',
            image: 'imageD.jpg'
        },
        {
            id: 5,
            name: 'Car E',
            model: 'Model E',
            zero_to_hundred_time: 3.6,
            horsepower: 480,
            max_speed: 330,
            engine: 'V8',
            image: 'imageE.jpg'
        },
        {
            id: 6,
            name: 'Car F',
            model: 'Model F',
            zero_to_hundred_time: 4.2,
            horsepower: 390,
            max_speed: 290,
            engine: 'V6',
            image: 'imageF.jpg'
        },
        {
            id: 7,
            name: 'Car G',
            model: 'Model G',
            zero_to_hundred_time: 3.3,
            horsepower: 460,
            max_speed: 325,
            engine: 'V8',
            image: 'imageG.jpg'
        },
        {
            id: 8,
            name: 'Car H',
            model: 'Model H',
            zero_to_hundred_time: 4.1,
            horsepower: 410,
            max_speed: 315,
            engine: 'V6',
            image: 'imageH.jpg'
        },
        {
            id: 9,
            name: 'Car I',
            model: 'Model I',
            zero_to_hundred_time: 3.0,
            horsepower: 550,
            max_speed: 340,
            engine: 'V8',
            image: 'imageI.jpg'
        },
        {
            id: 10,
            name: 'Car J',
            model: 'Model J',
            zero_to_hundred_time: 4.4,
            horsepower: 380,
            max_speed: 280,
            engine: 'V6',
            image: 'imageJ.jpg'
        },
    ];

    const [carsData, setCarsData] = useState<Vehicle[]>(initialCarsData);
    const [filteredCars, setFilteredCars] = useState<Vehicle[]>(initialCarsData);

    const handleSearch = (query: string) => {
        const result = carsData.filter((car) =>
            car.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCars(result);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className='flex flex-wrap flex-1 gap-5 p-5'>
                {filteredCars.map((car) => (
                    <Card key={car.id} vehicle={car} updateQuantity={() => {}}/>
                ))}
            </div>
        </div>
    );
}