"use strict"

function giveDescription(grade) {
    let description;
    switch (grade){
        case "A": description = "Excellent"; break;
        case "B": description = "Good"; break;
        case "C": description = "Average"; break;
        case "D": description = "Poor"; break;
        case "F": description = "Fail"; break;
        default: description = "no such grade";
    }
    return description;
}

const letterGrade = prompt("Enter a grade");

let result = giveDescription(letterGrade);

document.getElementById("content").innerHTML = `${letterGrade} means ${result}`;