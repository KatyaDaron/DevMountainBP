// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4
// 2 => 2 * 2 = 4 -> Output-Pos 1
// 3 => 3 * 3 = 9 -> Output-Pos 2
// 4 => 4 * 4 = 16 -> Output-Pos 3
// 5 => 5 * 5 = 25 -> Output-Pos 5
// Output: 2, 3, 4, 23, 5

let sortByProduct = (arr) => {
    //map the values to an array of objects containing value, index, and product
    const mapArr = arr.map((value, index) => {
        return {value, index, product: value * (index +1)}
    })
    //sort the mapped array by produc in acending order
    mapArr.sort((a,b) => a.product - b.product)
    //map the sorted array back to an array of values only 
    const sortedArr = mapArr.map(obj => obj.value)
    return sortedArr
}

console.log(sortByProduct([23, 2, 3, 4, 5]));