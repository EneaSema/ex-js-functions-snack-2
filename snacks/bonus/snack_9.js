/* Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

console.log("Esercizio 9");

const a = 10;
const b = 2;

function sum(a, b) {
  return a + b;
}
function minus(a, b) {
  return b - a;
}
function multiplier(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
// const sequenzaOperazioni = setInterval(
//   [
//     () => console.log("operazione 1: Somma" + sum(a, b)),
//     () => console.log("operazione 2: Sottrazione" + minus(a, b)),
//     () => console.log("operazione 3: Moltiplicazione" + multiplier(a, b)),
//     () => console.log("operazione 4: Divisione" + division(a, b)),
//   ],
//   2000
// );

// console.log(sequenzaOperazioni);
