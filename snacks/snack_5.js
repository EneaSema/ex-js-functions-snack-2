/* 🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

console.log("Esercizio 5");

const stampaOgniSecondo = setInterval(
  () => console.log("Messaggio in loop"),
  1000
);

clearInterval(stampaOgniSecondo);
