/* BONUS
Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia.
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. 
Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/
console.log("Esercizio 8");

function contoAllaRovescia(n) {
  let contDown = n;
  let starContdown = setInterval(function () {
    console.log(contDown);
    contDown--;
    if (contDown !== 0) {
      console.log(contDown);
    } else {
      console.log("tempo scaduto");
      setTimeout(clearInterval(starContdown), 0);
    }
  }, 1000);
}

console.log(contoAllaRovescia(5));
