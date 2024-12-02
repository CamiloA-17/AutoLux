'use client';
import React, { useEffect, useState } from 'react';
import { getDataById } from '@/services/api';
import { useParams } from 'next/navigation';
import { Vehicle } from '@/types/api';
import carro from '../../app/assets/images/carro1.png';
import jaguar from '../../app/assets/images/f-type-r-dynamic.svg';
import Lamborghini_Huracán_Evo from '../../app/assets/images/huracan_evo.jpg';
import urus from '../../app/assets/images/urus.jpg';
import turbo_911_s_image from '../../app/assets/images/911_turbo_s.jpg';
import Porsche_Cayenne_Turbo_GT3_image from '../../app/assets/images/Porsche_Cayenne_Turbo_GT.webp';
import Bugatti_Veyron_Grand_Sport_image from '../../app/assets/images/Bugatti_Veyron_Grand_Sport.jpg';
import bugatti_divo from '../../app/assets/images/Bugatti_Divo.jpg';
import Tesla_Model_X_Plaid from '../../app/assets/images/Tesla_Model_X_Plaid.jpg';
import Tesla_Roadste from '../../app/assets/images/Tesla_Roadste.jpg';
import Aston_Martin_DBS_Superleggera from '../../app/assets/images/Aston_Martin_DBS_Superleggera.jpg';
import Aston_Martin_DBX707 from '../../app/assets/images/Aston_Martin_DBX707.jpg';
import { StaticImageData } from '@/node_modules/next/image';


const imageMap: { [key: string]: StaticImageData } = {
    huracan_evo: Lamborghini_Huracán_Evo,
    urus_image: urus,
    turbo_911_s: turbo_911_s_image,
    cayenne_turbo_gt: Porsche_Cayenne_Turbo_GT3_image,
    veyron: Bugatti_Veyron_Grand_Sport_image,
    divo_image: bugatti_divo,
    modelx: Tesla_Model_X_Plaid,
    roadster: Tesla_Roadste,
    dbs_superleggera: Aston_Martin_DBS_Superleggera,
    dbx707: Aston_Martin_DBX707,
    jaguar: jaguar,
};

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

    const vehicleImage = carData && carData.image ? imageMap[carData.image] || jaguar : jaguar;


    return (
        <div className="container mx-auto p-6">
            {carData ? (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-4">{carData.name} ({carData.modelo})</h1>
                    <div className="mb-4">
                        <img
                            src={vehicleImage.src}
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
                            <p className="text-lg">{carData.top_speed} km/h</p>
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
