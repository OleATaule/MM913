// Rock > Scissors
// Paper > Rock
// Scissors > Paper

const rock = 1;
const paper = 2;
const scissors = 3;

const CHOICES = { rock, paper, scissors };
const LIST_OF_CHOICES = [rock, paper, scissors];

const GAME_DICTIONARY = {
    player: "Du",
    npc: "Dave-I"
    draw: "That's a draw!",
    winner: "The winner is: ",
    selectionQuestion: "Gjør valget ditt (S)tein, S(a)ks, (P)apir",
    youPicked:"Du valgte",
    aiPicked:"mens Dave-I valgte ",
    rock:"S",
    paper:"P",
    scissors:"A",
    choices:["Stein", "Papir", "Saks"]
};

const COLOR = {
    RED: "\x1b[1;31m"
};
const RESET = "\x1b[0m";

print('La oss spille Stein, Saks, Papir',COLOR.RED);
// log legger til en liten tekstbit "\n" som gjør at det blir linjeskift

let player = await askForPlayerChoice();
let npc = makeAIChoice();

print(`${GAME_DICTIONARY.youPicked} ${getDesc(player)} ${GAME_DICTIONARY.aiPicked} ${getDesc(npc)}`);
print(GAME_DICTIONARY.winner: + evaluateWinner(player, npc));

function print(text, color) {
    if(color != undefined) {
        console.log(color, text, RESET)
    } else {
        console.log(text);
    }
}


// ----- Game functions etc.

function getDesc(choice) {
    return GAME_DICTIONARY.choices[choice - 1]
}

async function askForPlayerChoice() {
    console.log(GAME_DICTIONARY.selectionQuestion);
    let choice = null;

    do { 
    let rawChoice = await rl.question("");
    rawChoice = rawChoice.toUpperCase();
    choice = evaluatePlayerChoice(rawChoice);
    } while (choice == null)

    return choice;
}
// await = må inn når en spiller skal gjøre et valg eller vi trenger tid til å gjøre noe

function evaluateWinner(p1Ch, p2Ch){

    let result = GAME_DICTIONARY.npc

    //men vi må sjekke om noe annet skjedde.
    if (p1Ch == p2Ch) {
        result = GAME_DICTIONARY.draw;
        
    } else if (p1Ch == CHOICES.rock) {
        if (p2Ch == CHOICES.scissors) {
            result = GAME_DICTIONARY.player;
    
        } 
    
    } else if (p1Ch == CHOICES.paper) {
        if (p2Ch == CHOICES.rock) {
            result = GAME_DICTIONARY.player;
    
        } 
    } else if (p1Ch == CHOICES.scissors) {
        if (p2Ch == CHOICES.paper) {
            result = GAME_DICTIONARY.player;
    
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
    if (rawChoice == GAME_DICTIONARY.rock) {
        choice = CHOICES.rock;
    } else if (rawChoice == GAME_DICTIONARY.paper) {
        choice = CHOICES.paper;
    } else if (rawChoice == GAME_DICTIONARY.scissors) {
        choice = CHOICES.scissors;
    }
    return choice;
}

