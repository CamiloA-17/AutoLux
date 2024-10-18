import { db } from '../firebaseConfig';
import { query, where, addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "@/firebaseConfig";
import { Vehicle } from '@/types/api_general';

const vehiclesCollection = collection(db, "vehicles");

export const getVehicles = async (): Promise<Vehicle[]> => {
    const all_vehicles = await getDocs(vehiclesCollection);
    const vehiclesList = all_vehicles.docs.map(doc => ({
        ...doc.data() as Vehicle,
        id: Number(doc.id)
    }));
    return vehiclesList;
}