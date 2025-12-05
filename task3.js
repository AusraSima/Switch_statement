"use strict"

function daysInMonthByNumber(monthNumber) {
    switch (monthNumber){
        case 1: return 31; break;
        case 2: return 28; break;
        case 3: return 31; break;
        case 4: return 30; break;
        case 5: return 31; break;
        case 6: return 30; break;
        case 7: return 31; break;
        case 8: return 31; break;
        case 9: return 30; break;
        case 10: return 31; break;
        case 11: return 30; break;
        case 12: return 31; break;
        default: return "no such month";
    }
}

const month = +prompt("Enter a number of month");

let result = daysInMonthByNumber(month);

document.getElementById("content").innerHTML = result;