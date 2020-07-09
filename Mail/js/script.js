// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


var listaMail = ["prova@mail.it" , "giovanni.storti@gmail.it" , "aldo.baglio@gmail.it" , "giacomo.poretti@gmail.it" , "antonio.albanese@yahoo.it" , "marina.massironi@yahoo.it" , "paola.cortellesi@yahoo.it" , "fabio.deluigi@hotmail.it"];

var mail = prompt("Inserisci la tua e-mail");

for (var i = 0; i < listaMail.length; i++) {
    if (mail == listaMail[i]) {
        alert("Buon proseguimento!");
        break;
    }
    else {
        alert("TE PIACEREBBE!");
    }
}


var n1 = Math.floor(Math.random()*6) +1;
var n2 = Math.floor(Math.random()*6) +1;
var risultato;
document.getElementById('lancio-p1').innerHTML= "Hai fatto " + n1
document.getElementById('lancio-ai').innerHTML= "L\'AI ha fatto " + n2

if (n1>n2) {
    risultato = "Vittoria!"
} else if (n2>n1) {
    risultato = "Sconfitta!"
} else {
    risultato = "Pareggio"
}

document.getElementById('risultato').innerHTML= risultato;
