// Define a function named "makeSandwich" with a rest parameter to accept variable number of items
function makeSandwich(...items) {
    // Print a message indicating the start of making a sandwich
    console.log("Making a sandwich with the following items:");

    // Using For-Each-Loop to Iterate over each item in the "items" array and print them
    items.forEach(item => console.log("- " + item));
}


// Call the "makeSandwich" function with different numbers of arguments

makeSandwich('chicken', 'cheese', 'butter');             // Making a sandwich with chicken, cheese, and butter

makeSandwich('egg', 'butter', "ketchup", "chicken");   // Making a sandwich with egg, butter, ketchup, and chicken

makeSandwich('peanut butter', 'sauce');              // Making a sandwich with peanut butter and sauce