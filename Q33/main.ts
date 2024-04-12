// Array containing numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through each number in the array
for (const number of numbers) {
    // Declare an empty variable to store the ordinal suffix
    let ordinalSuffix: string;

    // Determine the appropriate ordinal suffix based on the number
    if (number === 1) {
        // For '1', use 'st' suffix
        ordinalSuffix = 'st';
    } else if (number === 2) {
        // For '2', use 'nd' suffix
        ordinalSuffix = 'nd';
    } else if (number === 3) {
        // For '3', use 'rd' suffix
        ordinalSuffix = 'rd';
    } else {
        // For all other numbers, use 'th' suffix
        ordinalSuffix = 'th';
    }

    // Print the number with the appropriate ordinal suffix
    console.log(`${number}${ordinalSuffix}`);
}