// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets. 
// You may consider a string with no parentheses balanced.

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function isBalanced(sample) {
    let parenthesesArr = [];
    for(let i = 0; i < sample.length; i++) {
        if(sample.charAt(i) == '(') {
            parenthesesArr.push(sample.charAt(i));
        }
        else if(sample.charAt(i) == ')' && parenthesesArr.length === 0) {
            return false;
        } 
        else if(sample.charAt(i) == ')' && parenthesesArr.length !== 0) {
            parenthesesArr.pop();
        }
    }
    return parenthesesArr.length === 0;
}

console.log(isBalanced(sample4));