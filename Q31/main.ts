// Array of usernames
let usernames: string[] = ['Admin', 'Zainab', 'Humaima', 'komal', 'Ashir'];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === 'Admin') {
            console.log(`Hello ${username},, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

// Check list of users is empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}