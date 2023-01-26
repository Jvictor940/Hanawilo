/*
MULTIPLE POINTERS 
Problem #1 
Create a function that takes an array of numbers and return both the minimum and 
maximum numbers, in that order. 
Examples 
minMax([1, 2, 3, 4, 5]) ➞ [1, 5] 
 
minMax([2334454, 5]) ➞ [5, 2334454] 
 
minMax([1]) ➞ [1, 1] 
Notes 
All test arrays will have at least one element and are valid. 
*/ 
function minMax(arr) {
    let minNum = [];
    let maxNum = []; 
    let result = [];
    let sortedArr = arr.sort()
    
    minNum.push(sortedArr[0]);
    maxNum.push(sortedArr[sortedArr.length - 1]);
    result = minNum.concat(maxNum);
    return result;
}
console.log(minMax([5, 4, 3, 2, 1]))

 
 
 
 
/* 
Problem #2 
Create a function that takes an array of non-negative integers and strings and return 
a new array without the strings. 
Examples 
filterArray([1, 2, "a", "b"]) ➞ [1, 2] 
 
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15] 
 
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123] 
Notes 
• Zero is a non-negative integer. 
• The given array only has integers and strings. 
• Numbers in the array should not repeat. 
• The original order must be maintained. 
*/


function filterArray(arr){
    return arr.filter(elem => typeof elem !== "string")
  }
  
  console.log(filterArray([1, 2, "a", "b"]))
  

/*
SORTING
Problem #3 
Create a function that returns an array of strings sorted by length in ascending order. 
Examples 
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"] 
 
sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", 
"shortcake"] 
 
sortByLength(["may", "april", "september", "august"]) ➞ ["may", 
"april", "august", "september"] 
 
sortByLength([]) ➞ [] 
Notes 
• Strings will have unique lengths, so don't worry about comparing two strings 
with identical length. 
• Return an empty array if the input array is empty (see example #4). 
*/
function sortByLength(arr){
    if (arr.length < 1) return arr;
    return arr.sort((a, b) => a.length - b.length)
    
  }
  console.log(sortByLength(["may", "april", "september", "august"]))
