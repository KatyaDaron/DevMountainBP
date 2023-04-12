// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// returns true
// hasUniqueChars("Moonday")
// returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// returns true

//////////////////SOLUTION 1////////////////////

function hasUniqueChars(word) {
    let unique = [];

    for(let i = 0; i < word.length; i++) {
        if(!unique.includes(word.charAt(i))) {
            unique.push(word.charAt(i));
        } else {
            return false;
        }
    }
    return true;
}

console.log(hasUniqueChars(`Monday`));

//////////////////SOLUTION 2////////////////////

// function hasUniqueChars(word) {
//     return word.length === new Set(word).size ? true : false;
// }
// console.log(hasUniqueChars(`Moonday`));