// Define a function named "createCar" to create a car object with manufacturer, model, and additional options
function createCar(manufacturer, model, ...options) {
    // Initialize a car object with manufacturer and model properties
    const car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional options to the car object
    options.forEach(option => {
        // Split each option into key-value pair and trim whitespace
        const [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });

    // Return the car object
    return car;
}

// Call the createCar function with required information and additional name-value pairs
const myCar = createCar('Bugatti', 'color: black', 'year: 2019', 'sunroof: true');

// Print the object to ensure all information was stored correctly
console.log(myCar);