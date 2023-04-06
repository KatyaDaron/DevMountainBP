// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

const nums = [1, 4, 11, 2, 37, -4];
let s = nums[0];
let l = nums[0];
for (let i = 1; i < nums.length; i++) {
  s = Math.min(s, nums[i]);
  l = Math.max(l, nums[i]);
}
console.log(s, l);