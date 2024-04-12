// Define a function named make_album to create an album object with optional tracks
function make_album(artist, title, tracks) {
    // Create an album object with artist and title properties
    var album = {
        artist: artist,
        title: title
    };
    // If tracks argument is provided, assign it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
// Create three albums using the make_album function with different arguments
var album1 = make_album('Jay Chou', 'Greatest Works of Art');
var album2 = make_album('Susan Boyle', 'I Dreamed a Dream', 12); // With tracks
var album3 = make_album('Norah Jones', 'Come Away with Me');
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
