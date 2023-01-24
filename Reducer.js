// given a array = [1, 2, 3, 4, 5]; 

// return a sum using reduce

function reducer(arr){
  return arr.reduce((total, num) => total + num, 0)
}

// given this array 
const array2 = [
	{
		num: 1
  },
  {
		num: 2
  },
  {
		num: 3
  },
  {
		num: 4
  },
  {
		num: 5
  },
]

function reducer2(arr){
  return arr.reduce((total, obj) => total + obj['num'], 0)
}


  var wishlist = [ 
     { title: "Tesla Model S", price: 90000 }, 
     { title: "4 carat diamond ring", price: 45000 }, 
     { title: "Fancy hacky Sack", price: 5 }, 
     { title: "Gold fidgit spinner", price: 2000 }, 
     { title: "A second Tesla Model S", price: 90000 } 
  ]; 

// use reduce to return me a total of items that are less than or equal to 5000 ----> $2005

function reducer3(arr){
  return arr.reduce((total, obj) => {
    if(obj.price <= 5000){
      total += obj.price;    
    }
    return total 
  }) 
}

// Turn an array of into a total of all numbers
function total(arr) {
    return arr.reduce((acc, currVal) => acc + currVal, 0)
 }
 
 console.log(total([1,2,3])); // 6

//  Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce((str, currVal) => {
      return arr.toString();
    })
 }
 
 console.log(stringConcat([1,2,3])); // "123"

//  Turn an array of voter objects into a count of how many people voted.
function totalVotes(arr) {
   return arr.reduce((count, obj) => count + (obj.voted ? 1 : 0), 0)
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 
// function totalVotes(arr) {
//     return arr.reduce((total, obj) => {
//       if (obj.voted === true){
//         total += 1
//       }
//       console.log(total)
//       return total;
//     }, 0)
// }

//  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once. 
function shoppingSpree(arr) {
   return arr.reduce((cost, obj) => cost + obj.price, 0) 
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005

//  Give an array of arrays, flatten them into a single array. 
function flatten(arr) {
    return arr.reduce((a , b) => a.concat(b), [])
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((votes, obj) => {
        if (obj.age >= 18 && obj.age <= 25 && obj.voted) {
          votes.numYoungVotes++;
        } 
        if(obj.age >= 18 && obj.age <= 25){
           votes.numYoungPeople++; 
        } 
        if (obj.age >= 26 && obj.age <= 35 && obj.voted){
          votes.numMidVotes++;
        }
        if (obj.age >= 26 && obj.age <= 35){
          votes.numMidPeople++;
        } 
        if (obj.age >= 36 && obj.age <= 55 && obj.voted){
           votes.numOldVotes++;
        }
        if (obj.age >= 36 && obj.age <= 55){
          votes.numOldPeople++;
        }
        
     // console.log(numYoungVotes
        return votes
      }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0, 
        numMidPeople: 0,
        numOldVotes: 0, 
        numOldPeople: 0,
        
      })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/