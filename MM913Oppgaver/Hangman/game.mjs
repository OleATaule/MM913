const word = "car".toLowerCase();
let guessedWord = [];

for (let i = 0; i < word.length; i++){ 
    guessedWord[i] = "_";
}

import 

let guess = await rl.question("Gjett en bokstav eller ord");
let isGameOver = false;

do {
    let guess = await rl.question("Gjett en bokstav eller ord: ").toLowerCase();

    if (word == guess) {
        console.log("Hurra, du gjettet riktig!");
        isGameOver = true;
    } 
    else if (word.includes(guess)) {
        console.log("Riktig bokstav");
    } else {
        console.log("Feil ord eller bokstav");
    }
} while (isGameOver == false)


