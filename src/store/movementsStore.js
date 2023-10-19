import { create } from "zustand";

export const useMovements = create((set) => ({
  movements: [],
  getMovements: async () => {
    const response = await fetch("https://gastos-app-server.onrender.com/movements");
    const movements = await response.json();
    set((state) => ({
      ...state,
      movements,
    }));
  },
  addMovement: async (movement) => {
    await fetch("https://gastos-app-server.onrender.com/addMovement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movement),
    });
  },
  totals: [],
  getTotals: async () => {
    const response = await fetch("https://gastos-app-server.onrender.com/totals");
    const totals = await response.json();
    set((state) => ({
      ...state,
      totals,
    }));
  },
  editMovement: async (updatedMovement, id) => {
    console.log(updatedMovement)
    await fetch(`https://gastos-app-server.onrender.com/movement/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovement),
    });
  },
  deleteMovement: async (id) => {
    await fetch(`https://gastos-app-server.onrender.com/movement/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }
}));
