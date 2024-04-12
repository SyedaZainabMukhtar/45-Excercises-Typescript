// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
// Define an array of magician names
var magician_names = ["Zainab", "Mukhtar", "Harry", "Harley"];
// Call make_great function to modify magician names
var great_magicians = make_great(magician_names);
// Show modified list of magicians
show_magicians(great_magicians);
