// Define a function named show_magicians to print each magician name from an array
function show_magicians(magicians) {
    // Use forEach loop to iterate over each magician name and print it
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magician names
var magician_names = ["Zainab", "Mukhtar", "Ashir", "Humaima"];
// Call the show_magicians function with the array of magician names
show_magicians(magician_names);
