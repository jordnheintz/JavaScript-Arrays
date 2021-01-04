// Declare an array named songs that contains five different names of songs
// as strings.
let songs = ["She","Drive", "waves", "Trust", "505"]

// Access the first song in the array and print it to the console
console.log(songs[0]);

// Now do the same with the third song in the array.
console.log(songs[2]);

// Write one line of code that changes the value of the last song in the
// array to "Happy" (overwriting the previous value).
songs[4] = "Happy";

// Create a new variable called jamFour and set it equal to the fourth
// song in the array.
let jamFour = songs[3];

// Add another song to the end of the array.
songs.push("Seconds")

// Add another song to the end of the array.
songs.push("Paradise")

// Add another song to the beginning of the array.
songs.unshift("Afraid")

// Print the length of the array to the console
console.log(songs.length);

// Remove the last song from the end of array, and then print the length of
// the array to the console one more time.
songs.pop()
console.log(songs.length);

// Write a for loop to iterate through every song in the array and print each song's
// value to the console.
for (let i = 0; i < songs.length; ++i){
    console.log(songs[i]);
}

// Copying from that loop you just wrote, modify it to print every song's
// value and every song's index in this format: 3, "Office Theme" or 0, "Billy Jean" etc.
for (let i = 0; i < songs.length; ++i){
    console.log(i, songs[i]);
}

// Declare a variable named lastSong that will always point to the last
// element of the songs array, no matter how many songs are in the array.
let lastSong = songs.length-1;