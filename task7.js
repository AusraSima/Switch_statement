"use strict"

function runCommand(cmd) {
    let action;
    switch (cmd){
        case "start": action = "Starting..."; break;
        case "stop": action = "Stopping..."; break;
        case "pause": action = "Pausing..."; break;
        case "resume": action = "Resuming..."; break;
        default: action = "Unknown command";
    }
    return action;
}

const command = prompt("Enter a command");

let result = runCommand(command);

document.getElementById("content").innerHTML = result;