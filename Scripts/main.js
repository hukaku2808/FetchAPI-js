fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    .then(response => {
        response.json().then(data => {
            console.log(data);
            if (data.length > 0) {
                var temp = "";
                data.forEach(itemData => {
                    temp += "<tr>";
                    temp += "<td>" + itemData.id + "</td>";
                    temp += "<td>" + itemData.name + "</td>";
                    temp += "<td>" + itemData.current_price + "</td>";
                    temp += "<td>" + itemData.market_cap + "</td></tr>";
                });
                document.getElementById('data').innerHTML = temp;
            }
        }


        )
    }
    )




//        if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("NETWORK RESPONSE ERROR");
//         }
//     })
//     .then(data => {
//         console.log(data);
//         displayCoingecko(data)
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));
// function displayCoingecko(data) {

//     const coingecko = data[0]
//     const coingeckoDiv = document.getElementById("coingecko");
//     const coingeckoName = coingecko.name;
//     const heading = document.createElement("h1");
//     heading.innerHTML = coingeckoName;
//     coingeckoDiv.appendChild(heading);
//     const coingeckoImg = document.createElement("img");
//     coingeckoImg.src = coingecko.image;
//     document.body.style.backgroundImage = "url('" + coingecko.image + "')";
// }


// Get list of coins from API
/*
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h', {})
    // Check if api data is being fetched
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayCoingecko(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));
*/


// showCoins = coins => {
//     const coinsDiv = document.querySelector('#coingeckocoins');

//     coins.forEach(coin => {

//         const coinElement = document.createElement('p');

//         coinElement.innerText = `Coin Name: ${coin.symbol}`;

//         coinsDiv.append(coinElement);
//     });

// }