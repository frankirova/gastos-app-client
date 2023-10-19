  import { create } from "zustand";

  export const useAccounts = create((set) => ({
    accounts: [],
    getAccounts: async () => {
      const response = await fetch("http://localhost:3000/accounts");
      const accounts = await response.json();
      set((state) => ({
        ...state,
        accounts,
      }));
    },
    addAccount: async (account) => {
      await fetch("http://localhost:3000/addAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
    },
    deleteAccount: async (id) => {
      await fetch(`http://localhost:3000/account/${id}`, {
        method: "DELETE",
        body: JSON.stringify(id),
      });
    },
    editAccount: async (updatedAccount, id) => {
      await fetch(`http://localhost:3000/account/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAccount),
      });
    },
  }));
