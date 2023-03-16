/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//ask to the user to insert a word
const userWord = prompt('Type a word')
//make the function
function isPalindrome (word) {
    // take the length of the word
    let lengthWord = word.length
    
    // split the word
    let firstHalf = ''
    let secondHalf = ''
    //if the word is even then
    if(lengthWord % 2 === 0) {
        //take the first half of the word
        for(let i= 0; i < word.length / 2; i++){
            firstHalf += word[i]
        }
        //take the second half of the word
        for(let i = firstHalf.length; i < word.length; i++) {
            secondHalf += word[i]
        }
        //reverse the second half of the word
        // To reverse first we make an array
        let arrSecondHalf = secondHalf.split('')
        //Then we reverse the array
        let reverseArrSecondHalf = arrSecondHalf.reverse()
        //then we make a string from that array
        let reverseSecondHalf = reverseArrSecondHalf.join('') 
        //let's finally check if the firstHalf is the same of reverseSecondHalf
        if(firstHalf == reverseSecondHalf){
            console.log('The word you typed is palindrome')
        } else {
            console.log('The word you typed is NOT palindrome')
        }
    } else {
        //take the first half of the word
        let moreThanHalf = ''
        for(let i= 0; i < Math.ceil(word.length / 2); i++){
            moreThanHalf += word[i]
        }
        //make an array
        let arrFirstHalf = moreThanHalf.split('')
        //remove the last letter
        let lastLetter = arrFirstHalf.pop()
        //get the firstHalf of the word
        firstHalf = arrFirstHalf.join('')
        //take the second half of the word
        for(let i = firstHalf.length + 1; i < word.length; i++) {
            secondHalf += word[i]
        }
        //reverse the second half of the word
        // To reverse first we make an array
        let arrSecondHalf = secondHalf.split('')
        //Then we reverse the array
        let reverseArrSecondHalf = arrSecondHalf.reverse()
        //then we make a string from that array
        let reverseSecondHalf = reverseArrSecondHalf.join('') 
        //let's finally check if the firstHalf is the same of reverseSecondHalf
        if(firstHalf == reverseSecondHalf){
            console.log('The word you typed is palindrome')
        } else {
            console.log('The word you typed is NOT palindrome')
        }
    }

}
isPalindrome(userWord)

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */


//choices
const choice = prompt('Choose between even or odd?')
const userNumberChoice = Number(prompt('Insert a number from 1 to 5'))

function evenOrOdd(word, number){
    const userChoice = word.toLowerCase()
    let computerChoice = ''
    if(userChoice == 'even') {
        computerChoice = 'odd'
    } else {
        computerChoice = 'even'
    }
    console.log(`Your choice is ${userChoice}`)
    console.log(`The Pc's choice is ${computerChoice}`)
    
    //numbers
    //const userNumberChoice = Number(prompt('Insert a number from 1 to 5'))
    console.log(`Your number is ${number}`)
    if(isNaN(number)) {
        console.log('this is not a number, please insert a number from 1 to 5')
    }
    const pcNumberChoice = Math.ceil(Math.random()* 5)
    console.log(`The Pc's number is ${pcNumberChoice}`)
    if ((number + pcNumberChoice) % 2 === 0){
        if(userChoice == 'even'){
            console.log('You won')
        } else {
            console.log('You lost')
        }
    } else {
        if(userChoice == 'odd'){
            console.log('You won')
        } else {
            console.log('You lost')
        }
    }
}
evenOrOdd(choice, userNumberChoice)



