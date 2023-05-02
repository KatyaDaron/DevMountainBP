// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const answer = (arr) => {
    let first = arr[0];
    let second = arr[1];
    let third = arr[2];
    let n;
    if(first%2 === 0 && second%2 === 0 || third%2 === 0) {
        n = arr.filter(el => el%2 !== 0);
    } else {
        n = arr.filter(el => el%2 === 0);
    }
    return n;
}

console.log(answer([2, 4, 0, 100, 4, 11, 2602, 36]));