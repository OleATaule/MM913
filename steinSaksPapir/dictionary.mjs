const GAME_DICTIONARY = {
    no : {
        player: "Du",
        npc: "Dave-I",
        draw: "Det ble uavgjort!",
        winner: "Vinneren ble: ",
        selectionQuestion: "Gjør valget ditt (S)tein, S(a)ks, (P)apir",
        youPicked:"Du valgte",
        aiPicked:"mens Dave-I valgte ",
        rock:"S",
        paper:"P",
        scissors:"A",
        choices:["Stein", "Papir", "Saks"],
        title: "La oss spille Stein, saks, papir!",
        playAgain: "Spille igjen? (J)a eller (N)ei",
        confirm: "J"
    
    },
    
    en : {
        player: "You",
        npc: "Dave-I",
        draw: "It's a draw!",
        winner: "The winner is: ",
        selectionQuestion: "Make your choice! (R)ock, (P)aper, (S)cissors",
        youPicked: "You picked ",
        aiPicked: " while Dave-I picked ",
        rock:"R",
        paper:"P",
        scissors:"S",
        choices:["Rock", "Papir", "Scissors"],
        title: "Let's play Rock, Papir, Scissors!",
        playAgain: "Do you want to play again? (Y)es or (N)o?",
        confirm: "Y"
    }
}

let no = GAME_DICTIONARY.no;
let en = GAME_DICTIONARY.en;

export default GAME_DICTIONARY;


