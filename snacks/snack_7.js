/* 🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo.
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

console.log("Esercizio 7");

const start = 1000;
const finish = 3000;
const newMessagge = "Hello";
console.log(messagge);

function eseguiFerma(newMessagge, start, finish) {
  let contatatore = 1;

  const esegui = setInterval(function () {
    console.log(newMessagge);
    contatatore++;
    if (contatatore * start > finish) {
      clearInterval(esegui);
      console.log("timer fermo");
    }
  }, start);
}

eseguiFerma(newMessagge, start, finish);

/* PRESO SPUNTO  CERCANDO SU GOOGLE E CON GEMINI */
