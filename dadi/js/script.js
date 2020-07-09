// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// *****CON UN DADO*****

// var n1 = Math.floor(Math.random()*6) +1;
// var n2 = Math.floor(Math.random()*6) +1;
// var risultato;
// document.getElementById('lancio-p1').innerHTML= "Hai fatto " + n1
// document.getElementById('lancio-ai').innerHTML= "L\'AI ha fatto " + n2
//
// if (n1>n2) {
//     risultato = "Vittoria!";
// } else if (n2>n1) {
//     risultato = "Sconfitta!";
// } else {
//     risultato = "Pareggio";
// }
//
// document.getElementById('risultato').innerHTML= risultato;



// *****CON DUE DADI*****

var n1 = Math.floor(Math.random()*6) +1;
var n2 = Math.floor(Math.random()*6) +1;
var n3 = Math.floor(Math.random()*6) +1;
var n4 = Math.floor(Math.random()*6) +1;
var player = n1 + n2;
var ai = n3 + n4;
var risultato;
document.getElementById('lancio-p1').innerHTML= "Hai fatto " + player
document.getElementById('lancio-ai').innerHTML= "L\'AI ha fatto " + ai

if (player>ai) {
    risultato = "Vittoria!";
} else if (ai>player) {
    risultato = "Sconfitta!";
} else {
    risultato = "Pareggio";
}

document.getElementById('risultato').innerHTML=risultato;
