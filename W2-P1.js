/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let x = 1
// let y = 2
// // let z = x > y ? console.log(x):console.log(y);

// if(x > y) {
//    console.log(x);
// } else {
//    console.log(y);
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

// let x = "not equal"
// let y = 6

// if(y != 5) {
//   console.log(x);
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// let x = "divisible by 5"
// let y = 10

// if((y % 5) == 0) {
//   console.log(x);
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// let x = 16
// let y = 8

// console.log((x,y === 8)||(x-y === 8));


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 60

// if(totalShoppingCart > 50) {
//   console.log("spedizione gratuita");
// }else{
//   console.log(totalShoppingCart + 10);
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let totalShoppingCart = 90
// let blackfryday = totalShoppingCart - (totalShoppingCart * 20 / 100)

// if(totalShoppingCart > 50) {
//   console.log("spedizione gratuita");
// }else{
//   console.log(totalShoppingCart + 10);
// }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// let x = 4
// let y = 2
// let z = 7

// if((z > y) && (y > x)){
//   console.log(z,y,x);
// }else if ((y > z) && (z > x)){
//   console.log(y,z,x);
// }else if ((x > z) && (z > y)){
//   console.log(x,z,y);
// }else if ((x > y) && (y > z)){
//   console.log(x,y,z);
// }else if ((y > x) && (x > z)){
//   console.log(y,x,z);
// }else if ((z > x) && (x > y)){
//   console.log(z,x,y);
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

// console.log(typeof 5);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// x = 10

// if(x % 2 == 0) {
//   console.log("pari");
// }else{
//   console.log("dispari");
// }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

// let val = 11
//   if (val < 10) {
//       console.log("Meno di 10");
//     } else if (val < 5) {
//       console.log("Meno di 5");
//     } else if (val >= 10) {
//       console.log("Uguale a 10 o maggiore");
//     }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

// let num = 20

// if (num < 5) {
//   console.log("Tiny");
// } else if ((num >= 5) && (num < 10)) {
//   console.log("Small");
// } else if ((num >= 10) && (num < 15)) {
//   console.log("Medium");
// } else if ((num >= 15) && (num < 20)) {
//   console.log("Large");
// } else if (num >= 20) {
//   console.log("Huge");
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

// let gender = "female"

// let isMale = gender === "male" ? console.log("male"):console.log("female")

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

// let n = 0

// while (n <= 5) {
//   console.log(n);
//   n++;
// }

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

// for (let index = 0; index <= 10; index++) {
//   if ((index === 3) || (index === 8)) {
//     continue;
//   }
//   console.log(index);
// }

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

// for (let index = 0; index <= 15; index++) {
//   console.log(index);
//   if ((index % 2 == 0) && (index != 0)) {
//     console.log("even");
//   }else if (index != 0) {
//     console.log("odd");
//   }
// }

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

// for (let index = 0; index <= 100; index++) {
//   console.log(index);
//   if ((index % 3 == 0) && (index % 5 == 0)) {
//     console.log("FizzBuzz");
//   }
//   else if (index % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (index % 5 == 0) {
//     console.log("Buzz");
//   }
// }

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

// let day = 7

// switch (day) {
//   case 1:
//     console.log("Lunedì");
//     break;
//   case 2:
//     console.log("Martedì");
//     break;
//   case 3:
//     console.log("Mercoledì");
//     break;
//   case 4:
//     console.log("Giovedì");
//     break;
//   case 5:
//     console.log("Venerdì");
//     break;
//   case 6:
//     console.log("Sabato");
//     break;
//   case 7:
//     console.log("Domenica");
//     break;

//   default:
//     break;
// }