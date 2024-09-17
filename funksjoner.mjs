function sayHello(to){  // alltid handlende eller spørrende
    console.log("Hello, " + to)  // to er et variabelnavn, kort og beskrivende
}

sayHello("Christian");
sayHello(studenter);

for(let i = 0; i < antallStudenter; i++){
    sayHello(studenter[i]);
}

//#region Kommentar på hva dette området er og kan skjules med pil til venstre
let randomIndex = Math.round(Math.random() * studenter.letght-1);

let tilfeldigStudent = velgTilfeldigStudentFra(studenter); //gi variabelen et navn som er lett å forstå

function velgTilfeldigStudentFra(liste){

}
//#endregion 

