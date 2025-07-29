/* 🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo.
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

console.log("Esercizio 7");

const start = 1000;
const finish = 10000;
const messagge = "Hello";
console.log(messagge);

// Mia soluzione che non va
//
// function eseguiFerma(messagge, start, finish) {
//   for (let i = start; i <= finish; i = i + 1000) {
//     setInterval(() => {
//       console.log(i + " il messaggio è:" + messagge);
//     }, 1000);
//   }
// }
