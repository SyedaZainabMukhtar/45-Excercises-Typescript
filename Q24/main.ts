// Define variables
const apple: string = 'apple';
const uppercaseApple: string = "APPLE"
const banana: string = 'banana';
const ten: number = 10;
const twenty: number = 20;
const bool1: boolean = true;
const bool2: boolean = false;
const bikes = ['Kawasaki Ninja H2R ', 'MV Agusta', 'Carbon Fiber Hayabusa','Ecosse ES1 Spirit'];

// Tests for equality and inequality with strings 
console.log("Is 'apple' equal 'apple'? I predict True.");
console.log(apple == "apple");

console.log("Is 'apple' not equal to 'apple'? I predict False.");
console.log(apple != apple);


// Tests using the lower case function
console.log("Is 'APPLE' equal to 'apple' after converting to lowercase? I predict True.");
console.log(uppercaseApple.toLowerCase() == 'apple');// True

console.log(`Is 'APPLE' not equal to 'apple' after converting to lowercase? I predict False.`);
console.log(uppercaseApple.toLowerCase() != 'apple'); // False


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(`Is 'ten' equal to 'twenty'? I predict False.`);
console.log(ten == twenty); // False

console.log(`Is 'ten' is not equal to 'twenty'? I predict True.`);
console.log(ten != twenty); // True

console.log(`Is ${ten} greater than ${twenty}? I predict False.`);
console.log(ten > twenty); // False

console.log(`Is ${ten} smaller than ${twenty}? I predict True.`);
console.log(ten < twenty); // True

console.log(`Is ${ten} less than or equal to ${twenty}? I predict True.`);
console.log(ten <= twenty); // True

console.log(`Is ${ten} greater than or equal to ${twenty}? I predict False.`);
console.log(ten >= twenty); // False

// Tests using "and" and "or" operators
console.log(`Is ${bool1} and ${bool2} = true? I predict False.`);
console.log(bool1 && bool2); // False

console.log(`Is ${bool1} or ${bool2} = true? I predict True.`);
console.log(bool1 || bool2); // True

// Test whether an item is in an array
console.log(`Is 'Neiman Marcus ' includes in the array? I predict False.`);
console.log(bikes.includes("Neiman Marcus")); // False

// Test whether an item is not include in an array
console.log(`Is 'Ecosse ' not in the array? I predict True.`);
console.log(!bikes.includes('Ecosse')); // True
