// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]): string[] {
    return magicians.map(name => `the Great ${name}`);
}

// Define an array of magician names
const magician_names: string[] = ["Zainab", "Mukhtar", "Harry", "Harley"];

// Call make_great function to modify magician names
const great_magicians: string[] = make_great(magician_names);

// Show modified list of magicians
show_magicians(great_magicians);