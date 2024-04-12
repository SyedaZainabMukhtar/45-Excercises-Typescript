// Array of usernames
const usernames: string[] = ['Admin', 'Zainab', 'Humaima', 'komal', 'Ashir'];

// Loop through the array and print greetings
for (const username of usernames) {
    // Check if the username is 'admin', and print a specific greeting
    if (username === 'Admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        // Print a generic greeting for non-admin users
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}