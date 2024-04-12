// Define a function named "city_country" with parameters for city and country, returning a string representing the city and country pair
function city_country(city: string, country: string): string {
    // Return a string concatenating the city and country with a comma and space
    return `${city}, ${country}`;
}

// Call the "city_country" function with different city-country pairs and print the returned value
console.log(city_country('Karachi', 'Pakistan')); 
console.log(city_country('Berlin', 'Germany')); 
console.log(city_country('Tokyo', 'Japan')); 