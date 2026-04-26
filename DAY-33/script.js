function DisplayMovie() {

}

function FetchMovie() {
    const URL = "https://www.omdbapi.com/?i=tt3896198&apikey=ff744821"
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.Poster == undefined ? "https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D" : data.Poster);
            console.log(data.imdbRating == undefined ? "N/A" : data.imdbRating);
            console.log(data.Year == undefined ? "N/A" : data.Year);
            console.log(data.Title == undefined ? "No Title" : data.Title)

            DisplayMovie()

        })
}
FetchMovie();
