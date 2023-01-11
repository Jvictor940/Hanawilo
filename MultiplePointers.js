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