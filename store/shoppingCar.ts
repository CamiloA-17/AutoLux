import { Vehicle } from '@/types/api_general';
import { create } from 'zustand';

type ShoppingCarType = {
    items: Vehicle[],
    addItem: (item: Vehicle) => void,
    removeItem: (item: Vehicle) => void
}

export const useShoppingCarStore = create<ShoppingCarType>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (item) => set((state) => ({ items: state.items.filter((i) => i.id !== item.id) }))
}));