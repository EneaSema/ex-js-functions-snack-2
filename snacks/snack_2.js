/* 🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

console.log("Esercizio 2");

const num = 3;

/* mio errore di comprensione
function square(num) {
  return num * num;
}*/

/* SOLUZIONE CORRETTA */

const square = (num) => num * num;

console.log("il quadrato del numero selezionato è:" + square(num));
