/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)
*/

/*
    Oppgave: Eksempel
    Lag en variabel som skal kunne endres. Variabelen skal representer din alder
*/

let myAge = 40;

/*
    Oppgave: A
    Lag en variabel som representerer ditt fornavn.
*/

let firstName = 'Ole';

/*
    Oppgave: B
    Lag en variabel for å lagre poengscore i et spill
*/

let score = 0;

/*
    Oppgave: C
    Øk verdien av variabelen din fra oppgave B med 5 (dvs dersom den var 0 så skal den bli 5)
    NB! Du skal øke verdien, ikke bare sette den til 5 (husk +)
*/

score += 5;
// score = score + 5

/*
    Oppgave: D
    Ta variabelen din fra oppgave B og gjør den 10 ganger større. 
*/

score *= 10;
//score = score * 10;

/*
    Oppgave: E
    Lag en variabel for å lagre et telefon nummer (bruk et fiktift nummer)
*/

const phoneNumber = 91929394;
// const telefonNummer = "+4791929394";
//landkode er tekst, derfor blir nummeret her til tekst. Derfor skilles ofte landskode
//fra nummer i databaser slik at nummeret kan lagres som nummer i stedet for tekst

/*
    Oppgave: F
    Lag en variabel som representerer hvorvidt du er en student eller ikke.
*/

let isStudent = true;

/*
    Oppgave: G
    Skriv koden som skal til for at det skal stå noe alla "Hei spiller xxxx din score er xx"
    Her skal xxxx være hentet fra variabelen i oppgave A og xx fra variabelen i oppgave B
*/

let melding = "Hei, spiller " + firstName + " din score er " + score;
console.log(melding); 

//raskere måte
//let melding = `Hei spiller ${firstName}, din score er ${score}`;
//optimalisering

/*
    Oppgave: H
    Lag en variabel som skal representere høyest oppnåd score i et spill.
    Set verdien av denne nye variabelen til verdien av variabelen fra oppgave B
*/

let highScore = score;