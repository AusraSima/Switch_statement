"use strict"

function returnCurrencySymbol(currencyCode) {
    let symbol;

    switch (currencyCode) {
        case "USD": symbol = "$"; break;
        case "EUR": symbol = "€"; break;
        case "GBP": symbol = "£"; break;
        case "JPY": symbol = "¥"; break;
        case "CHF": symbol = "Fr"; break;
        default: symbol = "Unsupported code";
    }
    return symbol;
}

const currencyCode = prompt("Enter currency code");

let result = returnCurrencySymbol(currencyCode);

document.getElementById("content").innerHTML = result;