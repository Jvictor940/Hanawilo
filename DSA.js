// Problem #1
/* Big-O is a standard mathematical notation that shows how efficient an algorithm is in the worst-ccase scenerio relative to its input size. To measure the efficiency of an algorithm, we need to consider the time complexity and space complexity. Big-O represents the computational difficulty of a task as the data set increases. O notation focuses on the worst case scenerio, or where the most computations are needed to get the job done. 

It is a theoretical measure of the execution of an algorithm, usually the time or memory needed, given the problem size n. 
*/
// Problem #2

/* 
Purple - Factorial 5
Blue - Quadratic 4
Green - Linear 3
Yellow - Log 2
Red - Constant 1
 
Constant time complexity is the most ideal scenerio and the best performer out of all the complexities. Regardless of how small or big the input size the data is, the time to complete the operation is the same. 

Example for constant time:
const arr1 = [1, 2, 3, 4]
arr1.push(5)

const twoSum = (num1, num2) => {
    return num1 + num2
}

O(LOG N): Log time complexity is when the time execution is proportional to the logorithm of the input size. Meaning the O(log n) never looks at all the elements in the input. Like a for...loop not looping through every element.

Example of log 

const forLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(something)
    }
}

O(N): Linear Time Complexity - indicates it has a 1:1 relationship between data size and time completion. All loops by default are linear. An array with 5000 numbers will take 5000x times longer than an array with just one number.

O(N^2): Quadratic Time Complexity - is when you increase the size of the input by  multiplication factor.  A great example is when you have a loop inside another loop. If you have 1000 items in your array that you're iterating through and have another loop inside to interate through another 1000, it becomes 1000 X 1000 times longer. 

O(N!): Factorial Time Complexity - One of the worst possibilities.

Example:
6! -> 6x5x4x3x2x1

PROBLEM #3
We care about Big-O because we can analyze how efficient an algoriithm is from the amount of time, storage, other resources it takes to run the algorithm, and a change in the input size. It tells us how well an algorithm will perform in a particular situation. Scalabilty is also important when it comes to the efficiency of your code as well as demonstrating code competency in interviews. Code performance is important because it determines how fast your application runs and how much storage is being used. 

PROBLEM #4
The problem with using performance.now() to measure how fast code runs on our machine is because every computer will compute the process at different times. 
It's also not the most accurate way of measuring code performance. 

PROBLEM #5 
Total time complexity: n + n + n^2

Consolidated time complexity: n^2

PROBLEM #6 
Total time complexity: n + n^2 

Consolidated time complexity: n^2 

PROBLEM #7 
We can ignore constants and consolidate our time complexities because when it comes to scaling and dealing with data growth constants are negligible, the actual growth impact comes from the actual Big-O. When it comes to having multiple time complexities in a computation, the worst time complexity is going to have a bigger impact on the performance of that code. 

PROBLEM #8 
Space Complexity - Helps analyze how much additional memory we need to allocate to compute our algorithm. Just like how we can measure the time complexity, we can measure space. 

PROBLEM #9 
Boolean - Constant Space 
Undefined - Constant Space 
Null - Constant Space 
Numbers - Constant Space
String - Linear Space 
Array - Linear Space
Oobject - Linear Space 

PROBLEM #10
Two reasons to use an array is when you need fast access to elements, and when you need order. 
Two reasons to use an object is when you have no need for order and no need for fast access to elements. 

PROBLEM #11
a inserting: Constant Time
b removing: Constant Time 
c searching: Linear Time 
d searching 2: Linear Time 
e accessing: Constant Time
f retrieving keys: Linear Time 
g retrieving values: Linear Time

PROBLEM #12
Inserting: Constant Time 
Inserting 2: Linear Time (Book Example) 
Removing: Constant Time 
Removing 2: Linear Time (Book Example)
Searching: Linear Time
Searching 2: Linear Time
Retrieving: Constant Time 
Method 1: Linear Time 
Method 2: Linear Time
Method 3: Linear Time
Method 4: Linear Time
Method 5: Linear Time
Method 6: Linear Time

PROBLEM #13 
1: Linear Time because we are iterating through each element in an array, Constant Space we are returning a numbeer 
2: Linear Time because the heaviest complexity which is the forEach iterates through each element. Linear space because we are returning an array.
3: Linear Time because in each if statement we are iterating through each element in the array. Linear space because we are returning a string.
4: Linear Time because we are iterating through each item in the array. Constant space because we are returning a number. 
5: Constant Time because no matter the data size ... Constant space because we are returning a number.
6: Lineaar Time because the if statements has us searching through the aray. Linear Space because we are returning an array and numbers.
7: O(n^2) - Quadratic Time because a forEach is inside of a forEach. Linear Space we are returning an array.
8: O(n^2) - Quadratic Time becuase we have a for loop inside of a while loop. Linear Space we are returning an array.
9: O(n^2) - Quadratic Time becasue .includes is inside a forEach. Linear Space we are returning an array.
10: Quadratic Time? There's a filter then return between numbers, then .reduce. Constant space we are returning a number.
*/