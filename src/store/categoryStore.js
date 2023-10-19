import { create } from "zustand";

export const useCategories = create((set) => ({
  categories: [],
  getCategories: async () => {
    const response = await fetch("https://gastos-app-server.onrender.com/myCategories");
    const categories = await response.json();
    set((state) => ({
      ...state,
      categories,
    }));
  },
  addCategory: async (category) => {
    await fetch("https://gastos-app-server.onrender.com/addCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  },
  deleteCategory: async (id) => {
    await fetch(`https://gastos-app-server.onrender.com/category/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }
}));
