// console.log('ciao mamma')

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

const word = prompt('choose your word'); //string

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

function isPalindrome(word1, word2){
    //osso
    //anna
    //non
    //radar
    //oronarono
    let result = false;

    //controllo se le parole sono palindrome 
    for(let h = 0; h < word1.length; h++){
        if(word1[h] === word2[h]){
            result = true
        }else{
            result = false
        }
    }

    if(result === true){
        console.log('palindrome word') //boolean value
    }else{
        console.log('not palindrome word') //boolean value
    }
    
    return result;
    
}
const wordLenght = isPalindrome(arrayRow, arrayRowReverse);
console.log(wordLenght);