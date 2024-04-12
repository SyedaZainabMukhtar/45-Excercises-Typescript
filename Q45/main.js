// Define a function named "createCar" to create a car object with manufacturer, model, and additional options
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model properties
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        // Split each option into key-value pair and trim whitespace
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    // Return the car object
    return car;
}
// Call the createCar function with required information and additional name-value pairs
var myCar = createCar('Bugatti', 'color: black', 'year: 2019', 'sunroof: true');
// Print the object to ensure all information was stored correctly
console.log(myCar);
