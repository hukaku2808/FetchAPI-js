
// Get list of coins from API
let promise1 = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {})

// Check if api data is being fetched
promise1.then((data) => {
    if (data.ok) {
        console.log("Success");
    } else {
        console.log("ERROR")
    }
    // expected output: "Success!"
});