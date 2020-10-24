let number = 3;
console.log(number)

/////////////                 //////////////
////////////  STACKS BASICS  //////////////
////////////                //////////////

// Stack Created, since arrays have all the functions or methods of a Stack
let letters = [];

let palindrome = 'racecar';

//Reversed palindrome
let rpalindrome = '';

// Looping through the palindrome, and pushing letter into the stack
for(let i = 0; i < palindrome.length; i++) {
    letters.push(palindrome[i])
}

console.log(letters)

for(let i = 0; i < palindrome.length; i++) {
    rpalindrome += letters.pop(palindrome[i]);
}

if ( rpalindrome === palindrome) {
    console.log(`${palindrome} is a palindrome`);
} else {
    console.log(`${palindrome} is not a palindrome`);
}


const Stack = function() {
    this.count = 0;
    this.storage = [];

    //Adds value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    // Returns the number of items in the stack
    this.size = function() {
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }

}

const myStack = new Stack();

myStack.push(3);
myStack.push(89);
myStack.push(8);
myStack.push(9);
myStack.push(11);
console.log(myStack.peek());
console.log(myStack.storage.pop());
console.log(myStack.peek());

myStack.push('I love data structures');
myStack.push('I love algorithms');
myStack.push('I love JavaScript');

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


/////////////                 //////////////
////////////  SETS BASICS    //////////////
////////////                //////////////


function mySet() {
    //the collection variable will hold the set
    let collection = [];
    //this method will check for the presence of an element and return either true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    //this method will return all the values in the set
    this.values = function() {
        return collection;
    }

    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    //this method will remove an element from a set
    this.remove = function() {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
    //this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    //this method will return the union of two sets
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach( e => {
            unionSet.add(e);
        });
        secondSet.forEach(e => {
            unionSet.add(e);
        })
        return unionSet;
    }
    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }
    //this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet
    }
    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every( value => {
            return otherSet.has(value);
        })
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setB.size());
console.log(setA.union(setB).values());
console.log(setB.difference(setA).values());
console.log(setB.intersection(setA).values());
