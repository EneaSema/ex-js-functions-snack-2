/* 🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

console.log("Esercizio 4");

let time = 7000;

function creaTimer(time) {
  console.log("timer pronto!");

  //   return setTimeout(function () { corrego, scrivendo arrow function dentro setTimeout e non la funzione anonima
  //     console.log("tempo scaduto");
  //   }, time);

  return setTimeout(() => {
    console.log("tempo scaduto");
  }, time);
}

creaTimer(time);
