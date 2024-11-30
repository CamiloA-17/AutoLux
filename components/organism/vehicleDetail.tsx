'use client';
import React, { useEffect, useState } from 'react';
import { getDataById } from '@/services/api';
import { useParams } from 'next/navigation';
import { Vehicle } from '@/types/api';
import carro from '../../app/assets/images/carro1.png';

export function VehicleDetail() {
    const { details } = useParams(); 
    const [carData, setCarData] = useState<Vehicle | null>(null);

    const getVehicleById = async (id: string | number) => {
        try {
            const car = await getDataById<Vehicle>('/vehicle', id);
            setCarData(car);
            console.log('Vehicle Details:', car);
        } catch (error) {
            console.error(`Error fetching vehicle with ID ${id}:`, error);
        }
    };

    useEffect(() => {
        if (details) {
            const id = Array.isArray(details) ? details[0] : details; 
            getVehicleById(id);
        }
    }, [details]);

    return (
        <div className="container mx-auto p-6">
            {carData ? (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-4">{carData.name} ({carData.modelo})</h1>
                    <div className="mb-4">
                        <img 
                            src={carro.src}
                            alt={`${carData.name} Image`} 
                            className="w-full h-auto rounded-lg" 
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-lg font-medium">Engine:</p>
                            <p className="text-lg">{carData.engine}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg font-medium">Top Speed:</p>
                            <p className="text-lg">{carData.topSpeed} km/h</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg font-medium">Horsepower:</p>
                            <p className="text-lg">{carData.hp} HP</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-lg font-medium">Acceleration (0-100 km/h):</p>
                            <p className="text-lg">{carData.acceleration}s</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl">Loading vehicle details...</p>
            )}
        </div>
    );
}
