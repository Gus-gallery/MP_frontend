import { create } from "zustand";

const useCart = create((set, get) => ({
  items: [],

  addItem: (product) => {
    const items = get().items;
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      set({ items: items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },

  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),

  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));

export default useCart;