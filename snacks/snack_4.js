/* 🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

console.log("Esercizio 4");

const time = 1000;

console.log("Tempo:" + time);

function creaTimer(time) {
  console.log("timer pronto!");

  return setTimeout(console.log("tempo scaudto"), 200000);
}

creaTimer(time);
