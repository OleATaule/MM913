//#region 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion

import GAME_DICTIONARY from "./dictionary.mjs";
import { ANSI } from "./lib/ansi.mjs";
import { print } from './lib/output.mjs';
import { getRandomItemFromArray } from "./lib/random.mjs";
import TITLE from "./titlescreen.mjs";

const CHOICES = { rock: 1, paper: 2, scissors: 3 };
const LIST_OF_CHOICES = [CHOICES.rock, CHOICES.paper, CHOICES.scissors];

let language = GAME_DICTIONARY.en; 

//--Språkvalg------------------------------------------------------
let languageAnswer = await rl.question("Choose your language (no/en)");

if(languageAnswer == "no"){
    language = GAME_DICTIONARY.no;
}
//----------------------------------------------------------------

print(TITLE, ANSI.COLOR.YELLOW);

setTimeout(playGame, 3000);

async function playGame() {
    print(ANSI.CLEAR_SCREEN);
    print(ANSI.CURSOR_HOME);
    print(language.title, ANSI.COLOR.BLUE)

    let player = await askForPlayerChoice();
    let npc = makeAIChoice();
    
    print(`${language.youPicked} ${getDesc(player)} ${language.aiPicked} ${getDesc(npc)}`);
    print(language.winner + evaluateWinner(player, npc));

    let answer = await askToPlayAgain(language.playAgain);
    if (answer.includes(language.confirm)) {
        playGame();
    } else {
        process.exit();
    }
}



function clearAndResetScreen() {
    print(ANSI.CLEAR_SCREEN);
    print(ANSI.CURSOR_HOME);
}




// ----- Game functions etc.

function getDesc(choice) {
    return language.choices[choice - 1]
}

async function askForPlayerChoice() {
    
    let choice = null;

    do { 
        print(language.selectionQuestion);
    let rawChoice = await rl.question("");
    rawChoice = rawChoice.toUpperCase();
    choice = evaluatePlayerChoice(rawChoice);
    } while (choice == null)

    return choice;
}
// await = må inn når en spiller skal gjøre et valg eller vi trenger tid til å gjøre noe


async function askToPlayAgain(question) {
   let choice = null;
    do { 
        let rawChoice = await rl.question(question);
        choice = rawChoice.toUpperCase();

    } while (choice == null || choice == "")

    return choice;
}


function evaluateWinner(p1Ch, p2Ch){

    let result = language.npc

    //men vi må sjekke om noe annet skjedde.
    if (p1Ch == p2Ch) {
        result = language.draw;
        
    } else if (p1Ch == CHOICES.rock) {
        if (p2Ch == CHOICES.scissors) {
            result = language.player;
    
        } 
    
    } else if (p1Ch == CHOICES.paper) {
        if (p2Ch == CHOICES.rock) {
            result = language.player;
    
        } 
    } else if (p1Ch == CHOICES.scissors) {
        if (p2Ch == CHOICES.paper) {
            result = language.player;
    
        } 
    
    }

    return result;
}
function makeAIChoice() {
    const maxPos = LIST_OF_CHOICES.length - 1;
    const rndPos = Math.round(Math.random() * maxPos);
    return Math.round(Math.random() * LIST_OF_CHOICES.length - 1);
}

function evaluatePlayerChoice(rawChoice) {
    let choice = null;
    if (rawChoice == language.rock) {
        choice = CHOICES.rock;
    } else if (rawChoice == language.paper) {
        choice = CHOICES.paper;
    } else if (rawChoice == language.scissors) {
        choice = CHOICES.scissors;
    }
    return choice;
}
