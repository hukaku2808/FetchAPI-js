


//Initialize a function
function getMarketData() {
    // retriving api market data as JSON object
    return fetch(marketUrl) // returns a promise
        .then(res => {
            return res.json();
        }).then(data => {
            return data; // "Success!"
        }).catch(error => {
            // print error to console if fail
            console.log(error);
        });
};

function generateMarketTableBody(data) {
    let number = Intl.NumberFormat("en-US");
    $('#coinSpan').text(data.data.active_cryptocurrencies);
    $('#exchangesSpan').text(data.data.markets);
    $('#totalMarketCapSpan').text("$" + number.format(data.data.total_market_cap.usd.toFixed(0)));
    $('#totalMarketCapSpanPercent').addClass(`${data.market_cap_change_percentage_24h_usd >= 0 ?
        "text-success" : "text-danger"}`);
    $('#totalMarketCapSpanPercent').text(" " + (data.data.market_cap_change_percentage_24h_usd).toFixed(2) + "%");
    $('#_24hVolSpan').text("$" + number.format(data.data.total_volume.usd.toFixed(0)));
    $('#btcSpan').text("BTC " + Number(data.data.market_cap_percentage.btc).toFixed(1) + "%");
    $('#ethSpan').text(" | ETH " + Number(data.data.market_cap_percentage.eth).toFixed(1) + "%");
};