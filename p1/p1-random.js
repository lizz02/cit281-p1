/* 
CIT 281 Project 1
Name: Elizabeth Yost
 */

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let randomWord = ""

for(i=0; i <= getRandomInteger(5, 26); i++){
    //convert a number on ascii table to a letter and apend it to randomWord
    randomWord = randomWord + String.fromCharCode(getRandomInteger(97, 123))
}
console.log(randomWord)