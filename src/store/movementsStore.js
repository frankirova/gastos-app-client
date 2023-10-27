import { create } from "zustand";

export const useMovements = create((set) => ({
  movements: [],
  getMovements: async (id) => {
    const response = await fetch(
      `https://gastos-app-server.onrender.com/movements${id}`
    );

    const movements = await response.json();
    set((state) => ({
      ...state,
      movements,
    }));
  },
  addMovement: async (movement) => {
    try {
      // Envía una solicitud para agregar un nuevo movimiento a la API
      const response = await fetch(
        "https://gastos-app-server.onrender.com/addMovement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movement),
        }
      );
      const totals_response = await fetch(
        "https://gastos-app-server.onrender.com/totals"
      );
      const totals = await totals_response.json();
      if (response.ok) {
        const addedMovement = await response.json();
        set((state) => ({
          ...state,
          movements: [...state.movements, addedMovement],
          totals: totals,
        }));
      } else {
        console.error("Error al agregar el movimiento");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  },
  totals: [],
  getTotals: async () => {
    const response = await fetch(
      "https://gastos-app-server.onrender.com/totals"
    );
    const totals = await response.json();
    set((state) => ({
      ...state,
      totals,
    }));
  },
  editMovement: async (updatedMovement, id) => {
    try {
      const response = await fetch(
        `https://gastos-app-server.onrender.com/movement/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMovement),
        }
      );
      const totals_response = await fetch(
        "https://gastos-app-server.onrender.com/totals"
      );
      const totals = await totals_response.json();
      if (response.ok) {
        const updatedMovementFromServer = await response.json();
        set((state) => {
          const updatedMovements = state.movements.map((movement) =>
            movement._id === id ? updatedMovementFromServer : movement
          );
          return {
            ...state,
            movements: updatedMovements,
            totals: totals,
          };
        });
      } else {
        console.error("Error al actualizar el movimiento");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  },
  deleteMovement: async (id) => {
    try {
      await fetch(`https://gastos-app-server.onrender.com/movement/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const totals_response = await fetch(
        "https://gastos-app-server.onrender.com/totals"
      );
      const totals = await totals_response.json();
      set((state) => {
        const updatedMovements = state.movements.filter(
          (movement) => movement._id !== id
        );
        return {
          ...state,
          movements: updatedMovements,
          totals: totals,
        };
      });
    } catch (error) {
      console.error("Error al eliminar el movimiento: ", error);
    }
  },
}));
