// Array containing pet animals
const animals: string[] = ['Dog', 'Horse', 'Goat'];

// Loop through each animal in the array and print a statement for each
for (const animal of animals) {
    // Print a statement about each animal being a great pet, converting the animal name to lowercase
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement outside the loop indicating that any of the animals would make a great pet
console.log(`Any of these animals would make a great pet!`);