// Declare an array of at least 6 integers. Create a function that will
// sort the integer array in ascending and descending order.
let numbers = [100, 200, 300, 400, 500, 600];
numbers.sort();
numbers.sort(function(a, b){return b-a});

// Create a list of your favorite movies, music, or video games 
// using a multidimensional array.
// Add titles to each genre. At least 2 titles per genre
let movies = [
["Thriller", "Nerve", "Basic Instinct"],
["Mystery", "Searching", "Before I Fall"],
["Comedy", "Death to 2020", "Kid Gorgeous"],
];

// Access the second element of the third array
console.log(movies[2][1]);

// Replace the first element of the second array with another
movies[1][0] = "Action";

// Using for loops, iterate through the arrays and print the elements to the console.
for (let i=0; i < movies.length; i++) {
    for (j = 0; j < movies[i].length; j++) {
         console.log(movies[i][j]); 
        }
 }