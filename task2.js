"use strict"

function calculate(a, b, operator){
    let number;
    switch(operator){
        case "+": number = a + b; break;
        case "-": number = a - b; break;
        case "*": number = a * b; break;
        case "/": number = a / b; break;
        defaul: number = "Error, check what you entered";
    }
    return number;
}

const first = +prompt("Enter a first number");
const second = +prompt("Enter a second number");
const operator = prompt("Enter an action you want to perform");

const result = calculate(first, second, operator);

document.getElementById("content").innerHTML= result;