const { Addition, Subtract } = require("./math");

const prompt = require("prompt-sync")()

console.log("Press 1 for Addition and press 2 for Subtract");

let opr = prompt();
if (opr == 1) {
    console.log('Enter a');
    let a = prompt();
    console.log('Enter b');
    let b = prompt();
    console.log("Addition :" + Addition(a, b));
}
if (opr == 2) {
    console.log('Enter a');
    let a = prompt();
    console.log('Enter b');
    let b = prompt();
    console.log("Subtraction :" + Subtract(a, b));
}
