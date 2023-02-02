// problem 1: reverse 
 
// Write a recursive function called reverseString which accepts a string and returns 
// a new string in reverse. 
 
// reverseString('tony') // 'ynot' 
// reverseString('baker') // 'rekab' 
 
function reverseString(str){ 
} 
 
// problem 2: palidrome 
 
// Write a recursive function called palindrome which returns true  
// if the string passed to it is a palindrome (reads the same forward and backward).  
// Otherwise it returns false. 
 
// palindrome('tony') // false 
// palindrome('monkey') // false 
// palindrome('tacocat') // true 
// palindrome('sos') // true 
 
const palidrome = (str) => { 
} 
 
// problem 3: someRecursive 
 
// Write a recursive function called isItRecursive which accepts an array and a 
// callback.  
// The function returns true if a single value in the array returns true when passed 
// to the callback.  
// Otherwise it returns false. 
 
// isItRecursive([1,2,3,4], isOdd) // true 
// isItRecursive([4,6,8,9], isOdd) // true 
// isItRecursive([4,6,8], isOdd) // false 
// isItRecursive([4,6,8], val => val > 10); // false 
 
//This is the callback function:  
const callback = (val) => val % 2 !== 0; 
 
const isItRecursive = (arr, callback) => { 
} 
 
 
 
 
 
// Please solve using RECURSION! 
// problem 4: flatten  
 
// Write a recursive function called flatTheArray which accepts an array of arrays  
// and returns a new array with all values flattened. 
 
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5] 
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5] 
// flatTheArray([[1],[2],[3]]) // [1,2,3] 
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3] 
 
const flatTheArray = (arr) => { 
} 
 