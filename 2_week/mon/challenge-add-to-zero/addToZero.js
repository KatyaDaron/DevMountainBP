// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

//let array = [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
//let array = [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
//let array = [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

let bool = false;
for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j ++) {
        if (array[i] + array[j] === 0) {
            bool = true;
        }
    }
}
console.log(bool);