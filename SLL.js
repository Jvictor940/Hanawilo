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
}


const list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.pushMultiple([1,2, 3, 4])

console.log(list)