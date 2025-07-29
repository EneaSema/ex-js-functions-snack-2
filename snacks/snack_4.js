/* 🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

// const time = 5000;

console.log("Esercizio 4");

function creaTimer(time) {
  return setTimeout(console.log("tempo scaduto!"), time);
}

console.log(creaTimer(5000));
