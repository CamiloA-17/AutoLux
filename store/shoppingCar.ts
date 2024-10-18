import { DaoVehicle } from "@/types/shoppingCar";
import { create } from 'zustand';

type ShoppingCarType = {
    items: DaoVehicle[],
    addItem: (item: DaoVehicle) => void,
    removeItem: (item: DaoVehicle) => void
}

export const useShoppingCarStore = create<ShoppingCarType>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (item) => set((state) => ({ items: state.items.filter((i) => i.id !== item.id) }))
}));