/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//ask to the user to insert a word
const userWord = prompt('Type a word')



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