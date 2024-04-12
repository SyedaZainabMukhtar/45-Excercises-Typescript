// Define a function named show_magicians to print each magician name from an array
function show_magicians(magicians: string[]): void {
    // Use forEach loop to iterate over each magician name and print it
    magicians.forEach(name => console.log(name));
}

// Define an array containing magician names
const magician_names: string[] = ["Zainab", "Mukhtar", "Ashir", "Humaima"];

// Call the show_magicians function with the array of magician names
show_magicians(magician_names);