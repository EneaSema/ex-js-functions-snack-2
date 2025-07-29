/* 🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri.
*/

console.log("Esercizio 3");

const moltiplicazione = (num1, num2) => num2 * num1;
const sottrazione = (num1, num2) => num2 - num1;

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(
  "la moltiplicazione è: " + eseguiOperazione(5, 10, moltiplicazione)
);
console.log("la sottrazione è: " + eseguiOperazione(5, 10, sottrazione));
