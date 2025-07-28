/* 🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

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

/* 🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

function square(num1) {
  return num1 * num1;
}

console.log("il quadrato del numero selezionato è:" + square(num1));

/* 🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri.
*/
const moltiplicazione = (num1, num2) => num2 * num1;
const sottrazione = (num1, num2) => num2 - num1;

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(
  "la moltiplicazione è: " + eseguiOperazione(5, 10, moltiplicazione)
);
console.log("la sottrazione è: " + eseguiOperazione(5, 10, sottrazione));

/* 🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

// const time = 5000;

function creaTimer(time) {
  return setTimeout(console.log("tempo scaduto!"), time);
}

console.log(creaTimer(5000));

/* 🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

const stampaOgniSecondo = setInterval(
  () => console.log("Messaggio in loop"),
  1000
);

clearInterval(stampaOgniSecondo);

/* 🏆 Snack 6
Crea un contatore automatico con setInterval.
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

const creaContatoreAutomatico = () => {
  let contatore = 0;
};

function setInterval() {
  () => {}, 5000;
}
