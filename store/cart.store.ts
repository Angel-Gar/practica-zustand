import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export interface Item {
  id: number;
  name: string;
  price: number;
}

interface CarState {
  items: Item[];
  addToCart: (item: Item) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const cartState: StateCreator<CarState> = (set, get) => ({
  items: [],
  addToCart: (item: Item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  getTotalItems: () => get().items.length,
  getTotalPrice: () => get().items.reduce((acc, b) => acc + b.price, 0),
});

export const useCartStore = create<CarState>()(
  persist(cartState, {
    name: "cart-storage",
    skipHydration: true,
  })
);
