"use strict"

function translate(langCode) {
    let greeting;
    switch (langCode){
        case "en": greeting = "Hello"; break;
        case "lt": greeting = "Labas"; break;
        case "fr": greeting = "Bonjour"; break;
        case "es": greeting = "Hola"; break;
        default: greeting = "Language not supported";
    }
    return greeting;
}

const language = prompt("Enter a language code");

let result = translate(language);

document.getElementById("content").innerHTML = result;