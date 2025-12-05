"use strict"

function giveSeason(temperature) {
    let description;
    const checkTemperature = temperature;

    switch (true) {
        case checkTemperature < 0: description = "Freezing"; break;
        case checkTemperature >= 0 && checkTemperature <= 10: description = "Cold"; break;
        case checkTemperature >= 11 && checkTemperature <= 20: description = "Mild"; break;
        case checkTemperature >= 21 && checkTemperature <= 30: description = "Warm"; break;
        case checkTemperature > 30: description = "Hot"; break;
        default: description = "Error";
    }
    return description;
}

const temperature = +prompt("Enter a temperature");

let result = giveSeason(temperature);

document.getElementById("content").innerHTML = result;