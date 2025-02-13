// Define a function named describe_city with parameters for city and country, assigning 'Pakistan' as the default country if not provided
function describe_city(city: string, country: string = 'Pakistan') {
    // Print a message describing the city and its country
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function with different cities and countries
describe_city('Karachi');              // City: Karachi, Country: Pakistan (default)
describe_city('Hyderabad');           // City: Hyderabad, Country: Pakistan (default)
describe_city('Berlin', 'Germany');  // City: Berlin, Country: Germany