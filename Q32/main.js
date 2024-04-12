// List of current usernames
var current_users = ['Admin', 'Zainab', 'Humaima', 'komal', 'Ashir'];
// List of new usernames
var new_users = ['Farhan', 'Rehman', 'Nida', 'Nimra', 'Safia'];
var _loop_1 = function (new_username) {
    // Convert the new username to lowercase for case insensitivity
    var lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === lowercase_new_username; })) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
};
// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
