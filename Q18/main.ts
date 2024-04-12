// Declare an array named placesToVisit of type string[], containing a list of places to visit
let placesToVisit: string[] = ["Tokyo", "Berlin", "Nairobi", "Denver", "Helsinki", "Atlanta"];

// Output the original order of the array
console.log("Orginal Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list by making a copy of the array
console.log("\nAlphabetical Order:", [...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nStill in Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("\nReversed Order:", placesToVisit);

// Reverse the order of the list again to return it to its original order
placesToVisit.reverse();

// Print the array to show it’s back to its original order
console.log("\nBack to Original Order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:", placesToVisit);

// Sort the array to change its order to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show that its order has changed to reverse alphabetical order
console.log("\nSorted in Reverse Alphabetical Order:", placesToVisit);