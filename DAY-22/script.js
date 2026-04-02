// API - application programing interface.
// It is between server (backend) and client(Frontend).
// USES to communicate between server client.
// CLIENT - frontend to send request to the server.
// request - is a command to server for specific service.
// Server - backend to handle request and send response.
// response - output/result according request.

//API IN JS

// Process of sending request to the server i called as api calling.
// How api calling
// using fetch function

// API request types
// 1. GET - to fetch / GET data from server.
// 2. POST - to send data to the server.
// 3. put/patch - to update data in server.
// 4. DELETE - to remove data in server.

// API calling --> GET
// API create --> node js
// API calling
// 1. Call api by fetch function.
// 2. fetch return response in promise.
// 3. use.then() to handle promise.
// 4. then((res)=> res.json), cover response into json by.json().
// 5. json() is also return data in promise.

const image = document.getElementById("image")
const refresh = document.getElementById("btn-refresh")

function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            image.src = data.message;

        });

}
fetchDog();

refresh.addEventListener("click", () => {
    fetchDog();
})