export const useAccounts = create((set) => ({
    cards: [],
    getCard: async () => {
        const response = await fetch(
            "https://gastos-app-server.onrender.com/accounts"
        );
        const accounts = await response.json();
        set((state) => ({
            ...state,
            accounts,
        }));
    },
    addCard: async (account) => {
        await fetch("https://gastos-app-server.onrender.com/addAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
    },
    deleteCard: async (id) => {
        await fetch(`https://gastos-app-server.onrender.com/account/${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
        });
    },
    editCard: async (updatedAccount, id) => {
        await fetch(`https://gastos-app-server.onrender.com/account/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedAccount),
        });
    },
}));
