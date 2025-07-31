/* BONUS
🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia.
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. 
Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

console.log("Esercizio 8");

const n = 10;

function contoAllaRovescia(n) {
  let contDown = n;
  console.log(contDown);
  let starContdown = setInterval(function () {
    contDown--;
    if (contDown === 0) {
      setTimeout(clearInterval(starContdown), 0);
      console.log("tempo scaduto");
    } else {
      console.log(contDown);
    }
  }, 1000);
}

console.log(contoAllaRovescia(n));
