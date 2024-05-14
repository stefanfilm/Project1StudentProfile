const coordinate = localStorage.getItem ("coordinate")  

$(function () {
    $("#datepicker").datepicker();
});

const geoLocate = async function () {
    console.log ("geoLocate Function")
    const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?format=json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb1cd7bdd4mshb21d7201ec48e50p1b6dd8jsn7cabad9e83bd',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    const parsedResults = JSON.parse (result)
    const lat = parsedResults.location.latitude
    const long = parsedResults.location.longitude
    renderLeaflet (lat,long)
	console.log(result);
} catch (error) {
	console.error(error);
}}

const API_Key = "a9e4876ac5msh5913a16c450d015p14e919jsnc4eb0aa15f4e"

const locationBtn = document.getElementById("location-button");
locationBtn.addEventListener("click", async function (event) {
    event.preventDefault ()
    geoLocate ()
})
    
const renderLeaflet = async function(lat,long) {
    const coordinate = [lat,long]
    localStorage.setItem ("coordinate", JSON.stringify (coordinate))
    const locationInput = document.getElementById("location-input");
    let map = L.map('map').setView([lat, long], 12);
    L.tileLayer(
        `https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${API_Key}`, 
        {
            attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }
    ).addTo(map);
}

if (coordinate != null) {
const lat = JSON.parse (coordinate) [0]
const long = JSON.parse (coordinate) [1]
    renderLeaflet (lat,long)
}


// Check if there is saved movie data in local storage
const savedMovieDataString = localStorage.getItem('savedMovie');

if (savedMovieDataString) {
    // Parse the saved movie data string back to an object
    const savedMovieData = JSON.parse(savedMovieDataString);

    // Display the saved movie data on the page
    let titleElement = $(`<p>${savedMovieData.name}</p>`);
    let imageElement = $(`<img src="${savedMovieData.imageUrl}" alt="Image">`);

    $('#movie-title').append(titleElement);
    $('#movie-img').append(imageElement);
}

const movieBtn = document.getElementById("movie-button");

movieBtn.addEventListener("click", async function () {
    const movieInput = document.querySelector("#movie-input");
    const movieTitle = movieInput.value.trim();
    console.log(movieTitle);

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
        const result = await response.json();

        const movieName = result.titleResults.results[0].titleNameText;
        const movieUrl = result.titleResults.results[0].titlePosterImageModel.url;
        console.log(movieName);
        console.log(movieUrl);

        let titleElement = $(`<p>${movieName}</p>`);
        let imageElement = $(`<img src="${movieUrl}" alt="Image">`);

        $('#movie-title').append(titleElement);
        $('#movie-img').append(imageElement);

        // Save movie data to local storage
        const movieData = {
            name: movieName,
            imageUrl: movieUrl
        };
        const movieDataString = JSON.stringify(movieData);
        localStorage.setItem('savedMovie', movieDataString);

    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
});
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
