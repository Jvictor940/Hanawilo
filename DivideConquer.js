// BINARY SEARCH 

nums = [-1, 0, 3, 5, 9, 12]

const binaryIterativeSearch = (arr, target) => {
  let start = 0 // Start index position 
  let end = arr.length -1 //end index position 
  
  while (start <= end ) { // We want the loop to continue running when start is less than the endpoint once they cross the loop will stop. 
    let midPointIndex = Math.floor((start + end) / 2 )
    let midPointValue = arr[midPointIndex] 
    
    if (midPointValue < target) {
      start = midPointIndex + 1 
    } else if (midPointValue > target) {
      end = midPointIndex - 1 
    } else {
      return midPointValue;
    };
  };
  return -1 
};