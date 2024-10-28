import { db } from '../firebaseConfig';
import { query, where, addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "@/firebaseConfig";
import { Vehicle } from '@/types/api_general';

const vehiclesCollection = collection(db, "vehicles");

export const getVehicles = async (): Promise<Vehicle[]> => {
    const all_vehicles = await getDocs(vehiclesCollection);
    const vehiclesList: Vehicle[] = [];

    for (const vehicleDoc of all_vehicles.docs) {
        const data = vehicleDoc.data();
        const vehicleData: Vehicle = {
            id: Number(vehicleDoc.id),
            name: data.name || 'N/A',
            model: data.model || 'N/A',
            zero_to_hundred_time: data.zero_to_hundred_time || 0,
            horsepower: data.horsepower || 0,
            max_speed: data.max_speed || 0,
            engine: data.engine || 'N/A',
            image: data.image || 'N/A',
        };

        vehiclesList.push(vehicleData);
    }

    return vehiclesList;
};