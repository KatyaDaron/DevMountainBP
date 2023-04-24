// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const decoder = string => {
    let code = [...string];
    let shiftBy = +code[0];
    let answer = [];
    for (let i = 1; i < code.length; i++) {
        answer.push(alphabet[alphabet.indexOf(code[i]) + shiftBy]);
    }
    console.log(answer.join(''));
}

decoder('2fcjjm');