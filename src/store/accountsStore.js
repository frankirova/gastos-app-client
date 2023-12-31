  import { create } from "zustand";

  export const useAccounts = create((set) => ({
    selectedAccount: { name: "PESOS" },
    updateSelectedAccount: (account) => set({ selectedAccount: account }),
    accounts: [],
    getAccounts: async () => {
      const response = await fetch("https://gastos-app-server.onrender.com/accounts");
      const accounts = await response.json();
      set((state) => ({
        ...state,
        accounts,
      }));
    },
    addAccount: async (account) => {
      await fetch("https://gastos-app-server.onrender.com/addAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
    },
    deleteAccount: async (id) => {
      await fetch(`https://gastos-app-server.onrender.com/account/${id}`, {
        method: "DELETE",
        body: JSON.stringify(id),
      });
    },
    editAccount: async (updatedAccount, id) => {
      await fetch(`https://gastos-app-server.onrender.com/account/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAccount),
      });
    },
  }));
