// Single Linked LIST 

class Node {
    constructor(val) {
      this.value = val
      this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.length){
            this.head = newNode; 
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Setting the direction
            this.tail = newNode; // reassigning the tail property to the newNode
        }
        this.length++;
        return this; 
    }

    // Create a new method that pushes more than 1 number into a SLL at a time
    pushMultiple(arr){
        //start from left to right
        for (let num of arr) {
            // iterate through each number and push to the end of the SLL using the already made push method 
            this.push(num)
        }
    
        // return the entire list again
        return this
    }

    shift() {
        if (!this.length) return;

        let removedNode = this.head
        this.head = removedNode.next;
        this.length--; 

        if(this.length === 0) {
            this.head = null; 
            this.tail = null; 
        }
        return removedNode;
    }

    pop() {
        if (!this.length) return; 

        let current = this.head;
        let newTail = current;

        while (current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null; 
        }
        return current; 
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.length){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode; 
        }
        this.length++;

        return this; 
    }

    get(index) {
        if (index < 0 || index >= this.length) return; 

        let counter = 0; 
        let current = this.head; 

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current; 
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true; 
        } else {
            return false; 
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false; 
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        
        prev.next = newNode;
        newNode.next = temp; 
        
        this.length++;
        return this; 
    }
}


const list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.pushMultiple([1,2, 3, 4])

console.log(list)


// Given a linked list, return the node that occurs the most in the list.
    
// For example, given the following linked list: 

    // 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null

// This function should return the node of 2. 

// The function mostFrequent(this), should take in a argument of a linked list and 
// return a value of the node that occurs the most often.

function mostFrequent() {
    // Edge Case
    if (!this.length) return -1; 

    // Initialize our object, maxcount, and set current to the beginning of the linkedlist 
    let frequency = []
    let maxCount = 0 
    let current = this.head

    // loop through list, and update frequency
    while (current.next){
        frequency[current.value] = (frequency[current.value] || 0) + 1;  
    }

    // loop through the object and find the most Frequent 
    for (let num in frequency){
        maxCount = Math.max(frequency[num], maxCount)
    }

    // return maxCount
    return maxCount; 

}