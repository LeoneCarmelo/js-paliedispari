/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//ask to the user to insert a word
const userWord = prompt('Type a word')

// take the length of the word
let lengthWord = userWord.length

// split the word
let firstHalf = ''
let secondHalf = ''
//if the word is even then
if(lengthWord % 2 === 0) {
    //take the first half of the word
    for(let i= 0; i < userWord.length / 2; i++){
        firstHalf += userWord[i]
    }
    //take the second half of the word
    for(let i = firstHalf.length; i < userWord.length; i++) {
        secondHalf += userWord[i]
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
    for(let i= 0; i < Math.ceil(userWord.length / 2); i++){
        moreThanHalf += userWord[i]
    }
    //make an array
    let arrFirstHalf = moreThanHalf.split('')
    //remove the last letter
    let lastLetter = arrFirstHalf.pop()
    //get the firstHalf of the word
    firstHalf = arrFirstHalf.join('')
    //take the second half of the word
    for(let i = firstHalf.length + 1; i < userWord.length; i++) {
        secondHalf += userWord[i]
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
