
const MIN = 1;  // store bokstaver fordi det er verdier for hele programmet
const MAX = 100;
let randomNumber = drawRandomNumberBetween(MIN,MAX);

console.log("I have a number between" + MIN + "and" + MAX);
console.log("Guess my number.");



function drawRandomNumberBetween(min,max){  //små bokstaver (min,max) lokal variabel
    return Math.round(Math.random() * (max-min)) + min;

}

process.exit();


//Utils ---
function output(content) {
    console.log(content);
}

// await = betyr at maskinen venter på input før den kjører videre