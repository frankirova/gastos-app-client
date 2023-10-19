import { create } from "zustand";

export const useMovements = create((set) => ({
  movements: [],
  getMovements: async () => {
    const response = await fetch("http://localhost:3000/movements");
    const movements = await response.json();
    set((state) => ({
      ...state,
      movements,
    }));
  },
  addMovement: async (movement) => {
    await fetch("http://localhost:3000/addMovement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movement),
    });
  },
  totals: [],
  getTotals: async () => {
    const response = await fetch("http://localhost:3000/totals");
    const totals = await response.json();
    set((state) => ({
      ...state,
      totals,
    }));
  },
  editMovement: async (updatedMovement, id) => {
    console.log(updatedMovement)
    await fetch(`http://localhost:3000/movement/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovement),
    });
  },
  deleteMovement: async (id) => {
    await fetch(`http://localhost:3000/movement/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }
}));
