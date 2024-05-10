
$(function () {
    $("#datepicker").datepicker();
});

const API_Key = "a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e"

const locationInput = document.getElementById("location-input");
const locationBtn = document.getElementById("location-button");
locationBtn.addEventListener("click", async function () {
    let map = L.map('map').setView([51.5, -0.1], 12);
L.tileLayer(`https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${API_Key}`, {
attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);
})

const movieInput = document.querySelector("#movie-input");
console.log(movieInput)
const movieTitle = movieInput.value.trim();
console.log(movieTitle)
const movieBtn = document.getElementById("movie-button");
movieBtn.addEventListener("click", async function () {

const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${movieTitle}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})

//     const location = locationInput.value;
//     const apiKey = 'a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e';
//     const url = `https://map-places.p.rapidapi.com/photo?photo_reference=${location}&maxheight=1600&maxwidth=1600`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e',
// 		'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
// 	}
// };
    // const url = `https://map-places.p.rapidapi.com/findplacefromtext/json?input=${location}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry`;
    // fetch(url)
    //     .then(function (response) {
    //         return response.json();   
    //     })
    //     .then(function(data){
    //         console.log(data)
    //     })
// })

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e',
    //         'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }})
