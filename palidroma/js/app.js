// console.log('ciao mamma')

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

const word = prompt('choose your word');

// console.log(word);

const arrayRow = []; // uno parole dritte 

for(let i = 0; i < word.length; i++){
    // console.log(word[i])
    const wordIndex = word[i];
    arrayRow.push(wordIndex);
}
console.log(arrayRow);


const arrayRowReverse = []; //parole al rovescio 

for(let j = word.length - 1; j >= 0 ; j--){
    // console.log(word[j]);
    const wordIndexReverse = word[j];
    arrayRowReverse.push(wordIndexReverse);
}
console.log(arrayRowReverse);

function isPalindrome(word){
    //osso
    //anna
    //non
    //radar
    //oronarono

    if(arrayRow === arrayRowReverse){
        console.log('the word is palindrome');
        return true;
    } else{
        console.log('the word is not palindrome');
        return false;
    }
}
const wordLenght = isPalindrome(word);
console.log(wordLenght);