// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//chiedere al utente di scegliere tra pari o dispari 
const evenOdd = prompt('choose even or odd')
console.log(evenOdd);

//chiedere all utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('insert a number from 1 to 5'))
console.log('userNumber: ', userNumber);

//generare un numero random da 1 a 5 

const addNumber = 1;

function isRandomNumber(){
    const randomNumbers = parseInt(Math.floor(Math.random() * 5));
    return randomNumbers;

}
console.log('RandomNumber: ', random())

const sum = userNumber + random();

console.log('sum ', sum);

function isEvenOdd(){
    if(sum % 2 === 0){
        console.log('il numero è pari')
        return true;
    }else {
        console.log('il numero è dispari ')
        return false
    }
}