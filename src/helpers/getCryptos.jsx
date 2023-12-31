export const getCryptos = () => {
    fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100"
    )
        .then((response) => response.json())
        .then((data) => {
            setCryptos(data);
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
};
