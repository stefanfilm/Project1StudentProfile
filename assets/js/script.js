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

        const movieCollection = JSON.parse(localStorage.getItem("movieCollection")) || [];
        movieCollection.push(movieData)

        // const movieDataString = JSON.stringify(movieData);
        localStorage.setItem("movieCollection",JSON.stringify(movieCollection));

    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
});

//Occupation Function 
document.addEventListener("DOMContentLoaded", function() {
    const occupationBtn = document.getElementById("occupation-btn");
    const occupationInput = document.getElementById("occupation-input");
    const occupationLabel = document.getElementById("occupation-label")
    const savedOccupation = localStorage.getItem("saved-Occupation")
    if (savedOccupation) {
        occupationLabel.textContent = savedOccupation;
        occupationInput.value = savedOccupation;
        occupationInput.style.display = "none";
        occupationBtn.textContent = "Edit";
    }
    occupationBtn.addEventListener("click", function() {
        if (occupationBtn.textContent === "Submit") {
            if (occupationInput.value.trim() !== "") {
                occupationLabel.textContent = occupationInput.value;
                localStorage.setItem("saved-Occupation", occupationInput.value);
                occupationInput.style.display = "none";
                occupationBtn.textContent = "Edit";
            }
        } else if (occupationBtn.textContent === "Edit") {
            occupationLabel.textContent = "";
            occupationInput.style.display = "";
            occupationBtn.textContent = "Submit";
        }
    })
})

//Age Function 
document.addEventListener("DOMContentLoaded", function() {
    const ageBtn = document.getElementById("age-btn");
    const ageInput = document.getElementById("age-input");
    const ageLabel = document.getElementById("age-label")
    const savedAge = localStorage.getItem("saved-age");
    if (savedAge) {
        ageLabel.textContent = savedAge;
        ageInput.value = savedAge;
        ageInput.style.display = "none";
        ageBtn.textContent = "Edit";
    }
    ageBtn.addEventListener("click", function() {
        if (ageBtn.textContent === "Submit") {
            if (ageInput.value.trim() !== "") {
                ageLabel.textContent = ageInput.value;
                localStorage.setItem("saved-age", ageInput.value);
                ageInput.style.display = "none";
                ageBtn.textContent = "Edit";
            }
        } else if (ageBtn.textContent === "Edit") {
            ageLabel.textContent = "";
            ageInput.style.display = "";
            ageBtn.textContent = "Submit";
        }
    })
})
//About Me Function 
document.addEventListener("DOMContentLoaded", function() {
    const aboutMeBtn = document.getElementById("aboutme-btn");
    const aboutMeInput = document.getElementById("aboutme-input");
    const aboutMeLabel = document.getElementById("aboutme-label")
    const savedAboutMe = localStorage.getItem("saved-about-me")
    if (savedAboutMe) {
        aboutMeLabel.textContent = savedAboutMe;
        aboutMeInput.value = savedAboutMe;
        aboutMeInput.style.display = "none";
        aboutMeBtn.textContent = "Edit";
    }
    aboutMeBtn.addEventListener("click", function() {
        if (aboutMeBtn.textContent === "Submit") {
            if (aboutMeInput.value.trim() !== "") {
                aboutMeLabel.textContent = aboutMeInput.value;
                localStorage.setItem("saved-about-me", aboutMeInput.value);
                aboutMeInput.style.display = "none";
                aboutMeBtn.textContent = "Edit";
            }
        } else if (aboutMeBtn.textContent === "Edit") {
            aboutMeLabel.textContent = "";
            aboutMeInput.style.display = "";
            aboutMeBtn.textContent = "Submit";
        }
    })
})

//Book Function 
document.addEventListener("DOMContentLoaded", function() {
    const bookBtn = document.getElementById("book-btn");
    const bookInput = document.getElementById("book-input");
    const bookLabel = document.getElementById("book-label")
    const savedBook = localStorage.getItem("saved-book");
    if (savedBook) {
        bookLabel.textContent = savedBook;
        bookInput.value = savedBook;
        bookInput.style.display = "none";
        bookBtn.textContent = "Edit";
    }
    bookBtn.addEventListener("click", function() {
        if (bookBtn.textContent === "Submit") {
            if (bookInput.value.trim() !== "") {
                bookLabel.textContent = bookInput.value;
                localStorage.setItem("saved-book", bookInput.value);
                bookInput.style.display = "none";
                bookBtn.textContent = "Edit";
            }
        } else if (bookBtn.textContent === "Edit") {
            bookLabel.textContent = "";
            bookInput.style.display = "";
            bookBtn.textContent = "Submit";
        }
    })
})

//Artist Function 
document.addEventListener("DOMContentLoaded", function() {
    const artistBtn = document.getElementById("artist-btn");
    const artistInput = document.getElementById("artist-input");
    const artistLabel = document.getElementById("artist-label")
    const savedArtist = localStorage.getItem("saved-artist");
    if (savedArtist) {
        artistLabel.textContent = savedArtist;
        artistInput.value = savedArtist;
        artistInput.style.display = "none";
        artistBtn.textContent = "Edit";
    }
    artistBtn.addEventListener("click", function() {
        if (artistBtn.textContent === "Submit") {
            if (artistInput.value.trim() !== "") {
                artistLabel.textContent = artistInput.value;
                localStorage.setItem("saved-artist", artistInput.value);
                artistInput.style.display = "none";
                artistBtn.textContent = "Edit";
            }
        } else if (artistBtn.textContent === "Edit") {
            artistLabel.textContent = "";
            artistInput.style.display = "";
            artistBtn.textContent = "Submit";
        }
    })
})

//Meal Function 
document.addEventListener("DOMContentLoaded", function() {
    const mealBtn = document.getElementById("meal-btn");
    const mealInput = document.getElementById("meal-input");
    const mealLabel = document.getElementById("meal-label")
    const savedMeal = localStorage.getItem("saved-meal");
    if (savedMeal) {
        mealLabel.textContent = savedMeal;
        mealInput.value = savedMeal;
        mealInput.style.display = "none";
        mealBtn.textContent = "Edit";
    }
    mealBtn.addEventListener("click", function() {
        if (mealBtn.textContent === "Submit") {
            if (mealInput.value.trim() !== "") {
                mealLabel.textContent = mealInput.value;
                localStorage.setItem("saved-meal", mealInput.value);
                mealInput.style.display = "none";
                mealBtn.textContent = "Edit";
            }
        } else if (mealBtn.textContent === "Edit") {
            mealLabel.textContent = "";
            mealInput.style.display = "";
            mealBtn.textContent = "Submit";
        }
    })
})

//Profile Picture 
const _ReadImage = (event) => {
    const input = event.target;
    const status = document.querySelector("#status");
    status.innerText = `Reading File...`;
    if(input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        const imgData = e.target.result;
        _SaveImage(imgData);
        _LoadImage(imgData)
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  const _SaveImage = (imgData) => {
    localStorage.setItem("profile-pic", imgData);
  };
  const _LoadImage = (imgData) => {
    const profilePic = document.querySelector("#profile-pic");
    const status = document.querySelector("#status");
    if(imgData) {
      profilePic.src = imgData;
      status.innerText = `Image Loaded!`;
    } else {
      profilePic.src = "";
      status.innerText = `No Image!`;
    }
  }
  _LoadImage(localStorage.getItem("profile-pic")); 

  //Birthday Picker 
  document.addEventListener("DOMContentLoaded", function() {
    const birthdayBtn = document.getElementById("birthday-btn");
    const birthdayInput = document.getElementById("datepicker");
    const birthdayLabel = document.getElementById("birthday-label")
    const savedBirthday = localStorage.getItem("saved-birthday");
    if (savedBirthday) {
        birthdayLabel.textContent = savedBirthday;
        birthdayInput.value = savedBirthday;
        birthdayInput.style.display = "none";
        birthdayBtn.textContent = "Edit";
    }
    birthdayBtn.addEventListener("click", function() {
        if (birthdayBtn.textContent === "Submit") {
            if (birthdayInput.value.trim() !== "") {
                birthdayLabel.textContent = birthdayInput.value;
                localStorage.setItem("saved-birthday", birthdayInput.value);
                birthdayInput.style.display = "none";
                birthdayBtn.textContent = "Edit";
            }
        } else if (birthdayBtn.textContent === "Edit") {
            birthdayLabel.textContent = "";
            birthdayInput.style.display = "";
            birthdayBtn.textContent = "Submit";
        }
    })
})


//Name 
document.addEventListener("DOMContentLoaded", function() {
    const nameBtn = document.getElementById("name-btn");
    const nameInput = document.getElementById("name-input");
    const nameLabel = document.getElementById("name-label")
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
        nameLabel.textContent = savedName;
        nameInput.value = savedName;
        nameInput.style.display = "none";
        nameBtn.textContent = "Edit";
    }
    nameBtn.addEventListener("click", function() {
        if (nameBtn.textContent === "Submit") {
            if (nameInput.value.trim() !== "") {
                nameLabel.textContent = nameInput.value;
                localStorage.setItem("savedName", nameInput.value);
                nameInput.style.display = "none";
                nameBtn.textContent = "Edit";
            }
        } else if (nameBtn.textContent === "Edit") {
            nameLabel.textContent = "";
            nameInput.style.display = "";
            nameBtn.textContent = "Submit";
        }
    })
})

//Facebook
document.addEventListener("DOMContentLoaded", function() {
    const fbBtn = document.getElementById("facebook-button");
    const fbInput = document.getElementById("facebook-input");
    const fbIcon = document.getElementById("facebook-icon");
    const fbAtt = document.getElementById("facebook-link-att");
    const savedFb = localStorage.getItem("saved-fb");
    if (savedFb) {
        fbAtt.href = savedFb;
        fbIcon.style.pointerEvents = "auto";
        fbInput.style.display = "none";
        fbBtn.textContent = "Edit";
    }
    fbBtn.addEventListener("click", function() {
        if (fbBtn.textContent === "Submit") {
            if (fbInput.value.trim() !== "") {
                let enteredURL = fbInput.value.trim();
                if (!enteredURL.startsWith("http://") && !enteredURL.startsWith("https://")) {
                    enteredURL = "https://" + enteredURL;
                }
                fbAtt.href = enteredURL;
                fbIcon.style.pointerEvents = "auto";
                localStorage.setItem("saved-fb", enteredURL);
                fbInput.style.display = "none";
                fbBtn.textContent = "Edit";
            }
        } else if (fbBtn.textContent === "Edit") {
            fbAtt.removeAttribute("href");
            fbIcon.style.pointerEvents = "none";
            fbInput.style.display = "";
            fbBtn.textContent = "Submit";
        }
    })
})

//Linkedin
document.addEventListener("DOMContentLoaded", function() {
    const linkedInBtn = document.getElementById("linkedin-button");
    const linkedInInput = document.getElementById("linkedin-input");
    const linkedInIcon = document.getElementById("linkedin-icon");
    const linkedInAtt = document.getElementById("linkedin-link-att");
    const savedLinkedIn = localStorage.getItem("saved-linkedin");
    if (savedLinkedIn) {
        linkedInAtt.href = savedLinkedIn;
        linkedInIcon.style.pointerEvents = "auto";
        linkedInInput.style.display = "none";
        linkedInBtn.textContent = "Edit";
    }
    linkedInBtn.addEventListener("click", function() {
        if (linkedInBtn.textContent === "Submit") {
            if (linkedInInput.value.trim() !== "") {
                let enteredURL = linkedInInput.value.trim();
                if (!enteredURL.startsWith("http://") && !enteredURL.startsWith("https://")) {
                    enteredURL = "https://" + enteredURL;
                }
                linkedInAtt.href = enteredURL;
                linkedInIcon.style.pointerEvents = "auto";
                localStorage.setItem("saved-linkedin", enteredURL);
                linkedInInput.style.display = "none";
                linkedInBtn.textContent = "Edit";
            }
        } else if (linkedInBtn.textContent === "Edit") {
            linkedInAtt.removeAttributeNS("href");
            linkedInIcon.style.pointerEvents = "none";
            linkedInInput.style.display = "";
            linkedInBtn.textContent = "Submit";
        }
    })
})

//Instagram
document.addEventListener("DOMContentLoaded", function() {
    const instagramBtn = document.getElementById("instagram-button");
    const instagramInput = document.getElementById("instagram-input");
    const instagramIcon = document.getElementById("instagram-icon");
    const instagramAtt = document.getElementById("instagram-link-att");
    const savedInstagram = localStorage.getItem("saved-instagram");
    if (savedInstagram) {
        instagramAtt.href = savedInstagram;
        instagramIcon.style = savedInstagram;
        instagramInput.style.display = "none";
        instagramBtn.textContent = "Edit";
    }
    instagramBtn.addEventListener("click", function() {
        if (instagramBtn.textContent === "Submit") {
            if (instagramInput.value.trim() !== "") {
                let enteredURL = instagramInput.value.trim();
                if (!enteredURL.startsWith("http://") && !enteredURL.startsWith("https://")) {
                    enteredURL = "https://" + enteredURL;
                }
                instagramAtt.href = enteredURL;
                instagramIcon.style.pointerEvents = "auto";
                localStorage.setItem("saved-instagram", enteredURL);
                instagramInput.style.display = "none";
                instagramBtn.textContent = "Edit";
            }
        } else if (instagramBtn.textContent === "Edit") {
            instagramAtt.removeAttribute("href");
            instagramIcon.style.pointerEvents = "none";
            instagramInput.style.display = "";
            instagramBtn.textContent = "Submit";
        }
    })
})

function initApp() {
    const movieCollection = JSON.parse(localStorage.getItem("movieCollection"))
    if (!movieCollection){
        return
    }
    movieCollection.forEach(movie => {
       
        let titleElement = $(`<p>${movie.name}</p>`);
        let imageElement = $(`<img src="${movie.imageUrl}" alt="Image">`);

        $('#movie-title').append(titleElement);
        $('#movie-img').append(imageElement);
    })
}
initApp()
