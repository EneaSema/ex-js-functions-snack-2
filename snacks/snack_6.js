/* 🏆 Snack 6
Crea un contatore automatico con setInterval.
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

console.log("Esercizio 6");

const time = 1000;

function creaContatoreAutomatico(time) {
  let contatore = 0;

  const startContatore = setInterval(() => {
    console.log("inizio contatore:" + contatore);
    contatore++;
    console.log("aumento contatore:" + contatore);
  }, time);

  return startContatore;
}

// console.log(startContatore);

const first = creaContatoreAutomatico(time);

console.log(first);

setTimeout(() => {
  clearInterval(first);
}, 5000);
