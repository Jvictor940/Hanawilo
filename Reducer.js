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