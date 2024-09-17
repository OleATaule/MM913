let student = "Olaf"; //entall for kun en student

let studenter = ["Olaf", "Alexander", "Tony"]; //bruk flertallsending, lettere å lese

console.log(studenter); //skriver ut hele lista med studenter

console.log(studenter[0]) //skriver kun ut navnet som er plass 0 - vi teller fra 0, ikke 1. Off by 1 error

for (let index = 2; index < 3; index++) {  //index skrives ofte bare som i. i, j, k brukes alltid i en loop
    console.log(index)
}

// x, y, z som variabelnavn brukes kun for lokasjon, aldri noe annet
// i, j, k brukes alltid i en loop. 
// jo kortere variabelnavn, jo kortere bør variabelen være

//if-løkke
while( true ){ 
    console.log("Hello class");
}
// denne løkka vil gjentas uendelig fordi den er satt til true. 

let teller = 0;
while( teller < studenter.length ){  
    console.log("Hello " + studenter[teller]);
    teller++;
}
