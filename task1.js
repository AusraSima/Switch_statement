"use strict"

function daysUntilWeekend(day){
    let number;
    switch(day){
        case "Monday": number = 5; break;
        case "Tuesday": number = 4; break;
        case "Wednesday": number = 3; break;
        case "Thursday": number = 2; break;
        case "Friday": number = 1; break;
        case "Saturday": number = 0; break;
        case "Sunday": number = 6; break;
        defaul: number = "Not a weekday";
    }
    return number;
}

const weekday = prompt("Enter a name of weekday");
const result = daysUntilWeekend(weekday);

document.getElementById("content").innerHTML= `Today is a ${weekday} and ${result} days remain till Saturday`;