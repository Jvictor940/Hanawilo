// Problem #1 
 
/* 
Write a function called minSubarraySum which accepts an array of integers and a number 
called n.  
The function should calculate the min sum of n consecutive elements in the array. 
*/ 
 
minSubarraySum([1,2,5,2,8,1,5],2) // 10 
minSubarraySum([1,2,5,2,8,1,5],4) // 17 
minSubarraySum([4,2,1,6],1) // 6 
minSubarraySum([4,2,1,6,2],4) // 13 
minSubarraySum([],4) // null 
 
// O(n) 
const minSubarraySumLinear = (arr, num) => { 
    // Initialize
    let minSum = 0;
    let tempSum = 0; 

    // edge case
    if (arr.length < num) return null; 

    // calculate the initial window
    for(let i = 0; i < num; i++){
        minSum += arr[i]
    }
    // temp starts at the same value as min
    tempSum = minSum
    // Sliding Window
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[num]; 
    }
    minSum = Math.min(minSum, tempSum)
    return minSum; 
} 
 
 
// Problem #2:  
 
/*  
Write a function called longestSubstringInString, which accepts a string and  
returns the length of the longest substring with all distinct characters. 
 
Please write in time complexity of O(n) 
*/ 
 
const longestSubstringInString = (str) => {
    let set = new Set();
    let start = 0; 
    let maxSize = 0;
    
    for (let i = 0; i < str.length; i++) {

        while (set.has(str[i])) {
            set.delete(str[start])
            start++;
        }
        set.add(str[i]);
        maxSize = Math.max(maxSize, i - start + 1)
    }
    return maxSize;
} 
 
// Test Cases:  
 
// longestSubstringInString('') 0 
// longestSubstringInString('rithmschool') 7 
// longestSubstringInString('thisisawesome') 6 
// longestSubstringInString('thecatinthehat') 7 
// longestSubstringInString('bbbbbb') 1 
// longestSubstringInString('longestsubstring') 8 