// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
// Original array
var magician_names = ["Zainab", "Mukhtar", "Harry", "Harley"];
// Making copy of orginal array through .slice()
var new_magicians = magician_names.slice();
// Modify the copied array to include "the Great"
var great_magicians = make_great(new_magicians);
// Show both arrays
console.log("Original Magicians Array:");
show_magicians(magician_names);
console.log("\nGreat Magicians Array':");
show_magicians(great_magicians);
