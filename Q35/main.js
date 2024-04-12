// Array containing pet animals
var animals = ['Dog', 'Horse', 'Goat'];
// Loop through each animal in the array and print a statement for each
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    // Print a statement about each animal being a great pet, converting the animal name to lowercase
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a statement outside the loop indicating that any of the animals would make a great pet
console.log("Any of these animals would make a great pet!");
