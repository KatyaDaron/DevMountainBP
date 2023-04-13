// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// returns true

// isPalindrom("noon")
// returns true

// isPalindrom("hello")
// returns false

// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// returns false

// isPalindrom("racecar")
// returns true

const isPalindrom = word => {
    let first = 0;
    let last = word.length - 1;
    while (first < last) {
        if(word.charAt(first) !== word.charAt(last)) {
            return false;
        } else {
            first ++;
            last --;
        }
    }
    return true;
}
console.log(isPalindrom("noon"));