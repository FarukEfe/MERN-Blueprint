import {create} from "zustand"

// Using this as the state manager instead of 'React.useState' makes a global state component, not local to a particular file.
// Import from various locations and use the same state wherever you need.
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}))