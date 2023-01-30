//Problem #1: Please solve using any pattern or brute force method 
 
// CHALLENGE 1: REVERSE A STRING 
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh' 
 
function reverseString(str) { 
  // return 'Let\'s Start' 
  return str.split('').reverse().join('');
} 
 
// CHALLENGE 2: VALIDATE A PALINDROME 
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false 
 
function isPalindrome(str) {
    if (str.split('').reverse().join('') === str){
        return true;
    } else return false
}
 
// CHALLENGE 3: REVERSE AN INTEGER 
// Return an integer in reverse 
// ex. reverseInt(521) === 125 
 
function reverseInt(int) {
   return (
    parseFloat(int.toString().split('').reverse().join(''))
   )
} 
 
// CHALLENGE 4: CAPITALIZE LETTERS 
// Return a string with the first letter of every word capitalized 
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript' 
function capitalizeLetters(str) {

    // Split the string into an array of strings whenever there is a blank space that is encountered so we can access each word individually. 
    const arr = str.split(' '); 

    //Loop through each element in the array and capitalize the first letter. 
    // Our charAt is isolating the 1st letter of each string and then we can use our toUpperCase on just that letter. Afterwards we concatenate that letter with the rest of the word with slice(1) which means from index 1 on..
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    // Join all the elements of the array back into a string using a blank space as a seperator. 
    return arr.join(' ');
}

// Map method
function capitalizeLetters(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
 
// CHALLENGE 5: MAX CHARACTER 
// Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a' 
function maxCharacter(str) {
    //HashMap We use an empty hash to hold our characters.
    const hm = {};
    let counter = 0; 
    let maxChar = ""

    for (const char of str){
        hm[char] = hm[char] + 1 || 1
    }

    for (let char in hm ){
        if (hm[char] > counter){
            counter = hm[char];
            maxChar = char;
        }
    }
    return maxChar;

} //

// function maxCharacter(str) {
//     const letters = {};
//     let mostFreqChar = "";
//     let maxCount = 0; 
    
//     for (let char of str){
//       letters[char] = letters[char] + 1 || 1 
//     }
    
//     for (let char in letters){
//       if(letters[char] > maxCount){
//         mostFreqChar = char;
//         maxCount = letters[char]
//       }
//     }
    
//     return mostFreqChar;
  
//   } 
 
/* CHALLENGE 6: FIZZBUZZ 
Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the 
number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 
and 5, print "FizzBuzz". 
*/
function fizzBuzz() {
    for (let n = 1; n <=100; n++){
        let output = "";
        if (n % 3 === 0) output+= "Fizz";
        if (n % 5 === 0) output+= "Buzz";
        console.log(output || n)
    }
} 
 
 
 
 
// CHALLENGE 7: LONGEST WORD 
// Return the longest word of a string 
// ex. longestWord('Hi there, my name is Brad') === 'there,' 
 
function longestWord(sen) { 
  // SOLUTION 1 - Return a single longest word 
  // SOLUTION 2 - Return an array and include multiple words if they have the same length 
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string 

  //   Create filtered array 
  //   match takes in a regular exoression and returns a filtered array based on our regex
  //   all thats going to be accepted in our regex is going to be between a-z and 0-9
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    console.log("wordArr",wordArr)
    
    // Sort by length 
    const sorted = wordArr.sort((a, b) => b.length - a.length)
    console.log("sorted" ,sorted)
  
    // if longest word put it into an array
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length)
  
    console.log("longest Word" ,longestWordArr)
    
    // Check if there is more than one arr val
    if (longestWordArr.length === 1){
      return longestWordArr[0]
    } else {
      return longestWordArr;
    }
}
/* 
  //Split the array into an a array of strings 
const longestStr = sen.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest; 
}, "");
return longestStr
} //reduce 
*/


// CHALLENGE 8: ARRAY CHUNKING 
// Split an array into chunked arrays of a specific length 
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]] 
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]] 
 
function chunkArray(arr, len) {
    const res = [];
    for (let i = 0; i < arr.length; i += len) {
        const chunk = arr.slice(i, i + len);
        res.push(chunk);
    }
    return res; 
} 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunkArray(arr, 3));
    
 
// CHALLENGE 9: FLATTEN ARRAY 
// Take an array of arrays and flatten to a single array 
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7] 
 
function flattenArray(arrays) {
    // SOLUTION 1
    return arrays.flat(3);

    // SOLUTION 2
    // return [].concat(...arrays);

    // SOLUTION 3 
    // return arrays.reduce((a, b) => a.concat(b))
}
arr1 = [[1, 2], [3, 4], [5, 6], [7]];
console.log(flattenArray(arr1));
 
// CHALLENGE 10: ANAGRAM 
// Return true if anagram and false if not 
// ex. 'elbow' === 'below' 
// ex. 'Dormitory' === 'dirty room##' 
 
function isAnagram(str1, str2) {
    /*
    // Edge Case 
    if (str1.length !== str2.length) return false;

    // Logic 
    if (str1.split('').sort().join('') === str2.split('').sort().join('')){
    return true;
    } else {
    return false;
    }
    */
    return formatStr(str1) === formatStr(str2);
    //   Helper function
      function formatStr(str) {
        return str.replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join();
      }
}



 
// CHALLENGE 11: LETTER CHANGES 
// Change every letter of the string to the one that follows it and capitalize the vowels 
// Z should turn to A 
// ex. 'hello there' === 'Ifmmp UIfsf'
 
// SOLUTION 1
function letterChanges(str) {
    // using map because it creates a new array and modifies. 
    str = str.split('').map(convert).join('');
    return str;
} 
// making a function to pass into map. this function will take in each element in the array and modify them. 
function convert(elem){
    // using regex to target nonalphabetical numbers. 
    let nonLetter = /\W/g; //Targets symbols that are nonalphabetical
    let numbers = /[0-9]/g; //Targets numbers 0-9.
    let lowerCaseVowels = /[aeiou]/g; // g represents a way to globally scan and match throughout the string and not just the first element it matches with. 
    
    if (elem.match(nonLetter) || elem.match(numbers)){
        return elem; 
    } else {
        // Convert character to asciiVal 65 = A, 66 = B so on so forth 
        // So if we convert it to asciival then we can do asciival++ on it and that'll return the next letter. 
        // charCodeAt() returns the unicode value of a given character 
      let asciiVal = elem.charCodeAt(0);
      asciiVal++;
      if(String.fromCharCode(asciiVal).match(lowerCaseVowels)){
        return String.fromCharCode(asciiVal).toUpperCase();
      }
      else {
        return String.fromCharCode(asciiVal);
    }
    
}

}
console.log(letterChanges('hello*3'))

// SOLUTION 2 
function letterChanges2(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z'){
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());
    return newStr;
}





 
// CHALLENGE 12: ADD ALL NUMBERS 
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS 
// ex. addAll(2,5,6,7) === 20 
 
// function addAll() {
//     let s = 0; 
//     for (let i = 0; i < arguments.length; i++){
//         s += arguments[i]
//     }
//     return s;
// } // reduce?? **

function addAll(...numbers){ // 3 dots is what's called rest works differently than the spread operator. 
    return numbers.reduce((acc, cur) => acc + cur);
}
 
// CHALLENGE 13: SUM ALL PRIMES 
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
//number greater than 1 whose only factors are 1 and itself 
// ex. sumAllPrimes(10) == 17 
 
function sumAllPrimes(num) { //added parameter
    let total = 0;
    //test if number is prime
    function CheckForPrime(i) {
        for(let j=2; j < i; j++){ //Check these. 
            if(i % j === 0){
            return false;
            }
        }
        return true;
    }

    //loop through all numbers from 2 to input value

    for(let i=2; i <= num; i++){ // we set i = 2 because prime numbers are greater than 1. 

        //sum only prime numbers, skip all others
        if(CheckForPrime(i)){
        total += i;
        }
    }
    return total; 
} ////
 
 
 
 
// CHALLENGE 14: SEEK & DESTROY 
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an 
// array 
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'] 
 
function seekAndDestroy(arr) { //!!!!! added argument, am i able to do that?
    let valuesToRemove = Array.from(arguments).slice(1); //Array.from is an ES6 method that turns our parameter into an array, from there we can perform array methods like splice on whatever argument is passed in.

    return arr.filter(function(value) {
      return !valuesToRemove.includes(value);
    });
  
} // 

function destroyer(arr, ...rest){
    return arr.filter(val => !rest.includes(val) )
} // Whoa wtf 
 
// CHALLENGE 15: SORT BY HEIGHT 
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the 
// trees. 
// ex. 
// a = [-1, 150, 190, 170, -1, -1, 160, 180] 
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190] 
 
function sortByHeight(a) { //!!!!!
    const arr1 = []; // hold the poition of where the -1s are. So the indexes of each -1
    const arr2 = []; // Storing the values of anything that isn't -1

    a.forEach((val, i) => { // value and index
        if (val === -1){
            arr1.push(i)
        } else {
            arr2.push(val)
        }
    });
        // a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val))
        const sortArr = arr2.sort((a, b) => a - b) // sorts lowest to higest! If you wanted to do it lowest to highest you would do b - a
        // console.log(arr1, arr2)
        // console.log(sortArr)
        arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
        return sortArr;
} 
const a = [-1, 150, 190, 170, -1, -1, 160, 180] 
console.log(sortByHeight(a))
// CHALLENGE 16: MISSING LETTERS 
// Find the missing letter in the passed letter range and return it. If all letters are present, 
// return undefined 
// ex. 
// missingLetters("abce") == "d" 
// missingLetters("abcdefghjklmno") == "i" 
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined 
 
function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing = ""

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) === compare){ 
            ++compare;// if true we are moving on to the next character code
        } else {
            missing = String.fromCharCode(compare); //if it is missing we want to put it into the variable of missing
        }
    })
    return missing; 
} //
 
// CHALLENGE 17: EVEN & ODD SUMS 
// Take in an array and return an array of the sums of even and odd numbers 
// ex. 
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116] 

// CHALLENGE 17: EVEN & ODD SUMS 
// Take in an array and return an array of the sums of even and odd numbers 
// ex. 
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116] 
 
// function evenOddSums(num) { 
//     let even = 0
//     let odd = 0
//     let arr = []
    
    
//     for (const number of num){
//       if ((number % 2) === 0){
//         even += number
//       } else {
//         odd += number
//       }
//     }
//     console.log("even", even);
//     console.log("odd", odd);
//     arr = [even, odd]
//     console.log(arr)
//   }
 
function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    
    arr.map(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))
            return [evenSum, oddSum];
}
 
 
/* 
Problem #18 
   
There is a malfunctioning keyboard where some letter keys do not work.  
All other keys on the keyboard work properly. 
 
Given a string text of words separated by a single space (no leading or trailing spaces)  
and a string brokenLetters  
of all distinct letter keys that are broken, return the number of  
words in text you can fully type using this keyboard. 
 
Example 1: 
 
Input: text = "hello world", brokenLetters = "ad" 
Output: 1 
Explanation: We cannot type "world" because the 'd' key is broken. 
 
Example 2: 
 
Input: text = "leet code", brokenLetters = "lt" 
Output: 1 
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken. 
 
Example 3: 
 
Input: text = "leet code", brokenLetters = "e" 
Output: 0 
Explanation: We cannot type either word because the 'e' key is broken. 
 
Constraints: 
 
1 <= text.length <= 104 
0 <= brokenLetters.length <= 26 
text consists of words separated by a single space without any leading or trailing spaces. 
Each word only consists of lowercase English letters. 
brokenLetters consists of distinct lowercase English letters. 
*/ 
const canBeTypedWords = (text, brokenLetters) => { 

} 

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0;
    let maxProf = 0; 
    
    if (prices.length < 2) return;
    // if (profit <= 0) return 0;
    
    for (let i = 0; i < prices.length; i++){
      for (let j = i + 1; j < prices.length; j++){
      // console.log(prices[j] - prices[i])
        prices[i] < prices[j] ? (profit = (prices[j] - prices[i])) : (profit = 0);
        // if (prices[i] < prices[j]){
        //   profit = prices[j] - prices[i]; 
        // } else {
        //   profit = 0; 
        // }
    if (profit > maxProf){
      maxProf = profit; 
    }
      // console.log("maxProf" ,maxProf);
        // console.log("profit" ,profit)
      }
    }
      // console.log("prices" ,prices)
    return maxProf;
};