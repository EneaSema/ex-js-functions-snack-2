/* 🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

console.log("Esercizio 1");

/* CREAZIONI 2 VARIABILI GLOBALI DA USARE PER LA SOMMA */

const num1 = 5;
const num2 = 10;
const num3 = 1;
const num4 = 7;

/* FUNZIONE DICHIARATIVA */

function sumNumbers(num1, num2) {
  const addNumbers = num1 + num2;

  return addNumbers;
}
console.log("la somma di num1 + num2 è:" + sumNumbers(num1, num2));

/* FUNZIONE ANONIMA */

const newSumNumbers = function (num3, num4) {
  const newAddNumbers = num3 + num4;
  return newAddNumbers;
};

console.log("la somma di num3 + num4 è:" + newSumNumbers(num3, num4));

/* FUNZIONE ARROW */

const arrowSumNumbers = (num1, num3) => num1 + num3;

console.log("la somma di num1 + num3 è:" + arrowSumNumbers(num1, num3));
