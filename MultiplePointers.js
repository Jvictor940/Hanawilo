// Multiple Pointers
/* Problem #1: Implement a function called countUniqueValues, which accepts a 
sorted array, and counts the unique values in the array. There can be 
negative numbers in the array, but it will always be sorted. 
*/
 
const values1 = [1,1,1,2];
const values2 = [1,2,3,4,5,5,5,6,6,7]; 
const values3 = [2,3,3,3,6,6,6,6]; 


const countUniqueValues2 = (arr) => {
    // edgecase if there is no elements in the array return 0
    if(arr.length === 0) return 0

    let i = 0 
    for (j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }; 
    };
    return i+1; 
}

console.log(countUniqueValues2([1, 2, 3, 3, 4, 4, 4, 5]))


const countUniqueValues = (arr) => {
    //edgecase
    if(arr.length === 0 )  return 0 

    let i = 0
    for (let j = 0; j < arr.length; j++){
        if( arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        };
    };
    return i+1
}

console.log(countUniqueValues(values1))

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
//   Edge Case
  if (nums.length <= 1) return nums;
  
  let nonZeros = [];
  let zeros = [];
  let findResult = [];
  
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== 0 ) {
      nonZeros.push(nums[i]); 
    } else zeros.push(nums[i]);
  }
  findResult = nonZeros.concat(zeros)
    return findResult; 
};

console.log(moveZeros([0,1,0,3,12]))




/*

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