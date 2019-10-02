const appKey = "6a42348f3f2db5f744296408f0807ef2";
var weatherUnit = localStorage.getItem('weatherUnit') ? localStorage.getItem('weatherUnit') : "&units=metric";
let weatherLocation = 'Trieste';
let weatherIcon = document.getElementById("weather-icon");
let temperature = document.getElementById("weather-temp");
const weatherDiv = document.getElementById("weather-div");

function changeUnit() {
    if (weatherUnit === "&units=metric") {
        weatherUnit = "&units=imperial";
    }
    else {
        weatherUnit = "&units=metric";
    }

    //localStorage.removeItem('weatherTemp');
    localStorage.clear(); 
    localStorage.setItem('weatherUnit', weatherUnit);

    setTimeout(function () {
        location.reload()
    }, 100); 

}

var api = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocation + "&appid=" + appKey + weatherUnit;

var userTime = new Date().getTime();
let getUserTime = localStorage.getItem('userTime');

// if userTime is not set, set it now and load weather details OR if userTime is more than 1 hour (3600000 ms) do this
if (!getUserTime || userTime > (Number(getUserTime) + 3600000)) {
    userTime = new Date().getTime();
    localStorage.setItem('userTime', userTime); // set time
    findWeatherDetails();
    setTimeout(function () {
        localStorage.setItem('weatherIcon', weatherIcon.className); // set icon
        localStorage.setItem('weatherTemp', temperature.innerText); // set temperature
        localStorage.setItem('weatherDesc', weatherIcon.title); // set description
    }, 100); //

}

// don't reload weather, only retrieve icon and temp
else {
    weatherIcon.className = localStorage.getItem('weatherIcon'); // retrieve icon 
    temperature.innerText = localStorage.getItem('weatherTemp'); // retrieve temp
    weatherIcon.title = localStorage.getItem('weatherDesc'); // retrieve description

    // time remaining until next update
    console.log(Math.trunc((3600000 - (userTime - Number(getUserTime))) / 60000) + " minute(s) until next weather update.");
}

function findWeatherDetails() {
    httpRequestAsync(api, theResponse);
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";

    if (200 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 232) {
        weatherIcon.className = "fas fa-bolt";
    }
    else if (300 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 531) {
        weatherIcon.className = "fas fa-cloud-rain";
    }
    else if (600 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 622) {
        weatherIcon.className = "fas fa-snowflake";
    }
    else if (701 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 781) {
        weatherIcon.className = "fas fa-smog";
    }
    else if (jsonObject.weather[0].id && jsonObject.weather[0].id === 800) {
        weatherIcon.className = "fas fa-sun";
    }
    else if (801 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 804) {
        weatherIcon.className = "fas fa-cloud";
    }
    else {
        console.log("Icon error");
    }

    weatherIcon.title = jsonObject.weather[0].description;
}

function httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}
