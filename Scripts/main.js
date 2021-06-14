// Fetch crypto coins from coingecko api
const settings = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h&market_cap_desc', {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "b8a3cbe47fmsh9d0f2c80fbfd09dp1b1c1cjsn055f4cf06374",
        "x-rapidapi-host": "coingecko.p.rapidapi.com"
    }
})
    // Check if api data is being fetched
    .then(response => {

        response.json().then(data => {
            console.log(data);
            if (data.length > 0) {
                // variable
                var temp = "";
                // name table colums to display from api 
                data.forEach(itemData => {
                    temp += "<tr>";
                    temp += "<td>" + "<img width='50px' height='50px'src=" + itemData.image + " </td>";
                    temp += "<td>" + itemData.symbol + "</td>";
                    temp += "<td>" + itemData.name + "</td>";
                    temp += "<td>" + '$' + itemData.current_price + "</td>";
                    temp += "<td>" + itemData.market_cap_change_percentage_24h + '%' + "</td>";
                    temp += "<td>" + '$' + itemData.market_cap + "</td>";
                    temp += "<td>" + itemData.last_updated + "</td>";

                    "</tr>";
                });
                //  Get id from table in HTML document and display api data
                document.getElementById('data').innerHTML = temp;
                // if reciving data fromdisplay connected message on console
                return console.log("successfully loaded data")
            }
            else {
                // if data not found return a error message on console 
                return console.log("Cannot Find Connection to API");

            }
        }
        )
    }).catch((error) => console.error("FETCH ERROR:", error));
