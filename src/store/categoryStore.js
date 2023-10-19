import { create } from "zustand";

export const useCategories = create((set) => ({
  categories: [],
  getCategories: async () => {
    const response = await fetch("http://localhost:3000/myCategories");
    const categories = await response.json();
    set((state) => ({
      ...state,
      categories,
    }));
  },
  addCategory: async (category) => {
    await fetch("http://localhost:3000/addCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  },
  deleteCategory: async (id) => {
    await fetch(`http://localhost:3000/category/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }
}));
