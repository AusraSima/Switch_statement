"use strict"

function convertTraficLight(color) {
    let description;
    switch (color){
        case "green": description = "Go"; break;
        case "yellow": description = "Prepare"; break;
        case "red": description = "Stop and wait"; break;
        default: description = "Unknown color";
    }
    return description;
}

const color = prompt("Enter a trafic light color");

let result = convertTraficLight(color);

document.getElementById("content").innerHTML = result;