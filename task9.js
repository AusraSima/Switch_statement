"use strict"

function typeAdvantage(type) {
    let strength;

    switch (type) {
        case "fire": strength = "grass"; break;
        case "water": strength = "fire"; break;
        case "grass": strength = "water"; break;
        default: strength = "No advantage";
    }
    return strength;
}

const type = prompt("Enter pokemon's type");

let result = typeAdvantage(type);

document.getElementById("content").innerHTML = result;