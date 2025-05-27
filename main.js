/* il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

// dati utenti

let chilometri = Number(prompt("quanti chilometri deve percorrere?"));
let age = Number(prompt("inserisca la sua età per avere uno sconto"));

// prezzo costante in base ai chilometri

const prezzoAlKm = 0.21;

// prezzo base

let prezzoBase = chilometri * prezzoAlKm;
let prezzoFinale;

//condizioni per gli sconti

//sconto minorenni

if (age < 18) {
  prezzoFinale = prezzoBase * 0.8;
  console.log("sconto minorenni applicato");
  console.log(prezzoFinale.toFixed(2));
}

// sconto over 65
else if (age > 65) {
  prezzoFinale = prezzoBase * 0.6;
  console.log("sconto over 65 applicato");
  console.log(prezzoFinale.toFixed(2));
}
