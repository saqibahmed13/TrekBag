import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";  // for localStorage

export const useItemsStore =  create(persist((set) => ({

    items: initialItems,

    addItems: (newItemText) => {
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false
        }
        set((state) => ({           // set is used inplace of function useState 
            items: [...state.items, newItem] 
        }))
    },

    // or
//     addItems: (newItemText) => {
//     const newItem = {
//         id: new Date().getTime(),
//         name: newItemText,
//         packed: false
//     };
//     set((state) => {
//         return {
//             items: [...state.items, newItem]  // Explicit return, no wrapping parentheses
//         };
//     });
// },


    deleteItem: (id) => {
        set((state => {
            const newItems = state.items.filter((item) => item.id != id)
            return { items: newItems }
        }))

    },

    toggleItem: (id) => {
        set(state => {
            const newItems = state.items.map((item) => {
                if (item.id == id) {
                    return { ...item, packed: !item.packed }
                }
                return item
            })
            return ({ items: newItems })
        })

    },
    removeAllItems: () => {
        set(() => ({ items: [] }))
    },
    resetToInitial: () => {
        set(() => ({ items: initialItems }))
    },

    markAsCompleted: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return { ...item, packed: true }
            })
            return { items: newItems }
        })
    },

    markAsInCompleted: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return { ...item, packed: false }
            })
            return ({ items: newItems })
        })
    },

}),{
    name:"item"   // we have to give the dependecy here for local storage like what we have to store
}))     