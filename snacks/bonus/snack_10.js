/* BONUS
🎯 Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

console.log("Esercizio 10");

function stampDone() {
  console.log("Eseguito");
}

const limite = 3000;

/* non avevo idea, ho visto soluzione a seguito di ricerche e ragionamenti */

function creaThrottler(stampDone, limite) {
  let ultimaEsecuzione = 0;

  return function () {
    const ora = Date.now();
    if (ora - ultimaEsecuzione >= limite) {
      ultimaEsecuzione = ora;
      stampDone();
    } else {
      console.log("non posso eseguire ancora");
    }
  };
}

const throttledLog = creaThrottler(stampDone, limite);

throttledLog();
throttledLog();
setTimeout(throttledLog, 10000);
