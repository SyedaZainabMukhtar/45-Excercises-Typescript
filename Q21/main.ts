// Define an interface named `itCourse` for a book object
interface itCourse {
    courseName: string;            // Property for the name of the course
    location: string;             // Property for the location of the course
    onsiteStudents: number;      // Property for the number of onsite students
    onlineStudents: number;     // Property for the number of online students
}

// Define an object of type `itCourse` representing a course in IT
let itCourse: itCourse = {
    courseName: "Cloud Applied Generative AI Engineering",  // Course name
    location: "Governor Sindh House",                      // Location of the course
    onsiteStudents: 50000,                                // Number of onsite students
    onlineStudents: 500000                               // Number of online students
};

// Output the `itCourse` object to the console
console.log(itCourse);