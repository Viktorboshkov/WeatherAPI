// window.addEventListener('load',  ()=> {
//     let long;
//     let lat; //longitude and latitude 
//     let tempDescription = document.querySelector('.temp-description');
//     let tempDegree = document.querySelector('.temp-degree');
//     let locationTimeZone = document.querySelector('.location-timezone');
//     // let tempDegree = document.querySelector('.temp-degree'); 

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position =>{
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//             c

// fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
//   headers: {
//     'Authorization': 'b644efbe-d227-11ec-881e-0242ac130002-b644f126-d227-11ec-881e-0242ac130002'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//     console.log(jsonData);
//     const {temperature, summary } = jsonData.
//     tempDegree.textContent = temperature;
//     tempDescription.textContent = summary;
// });
//         });
//     } else {
//         h1.textContent = "Enable your location!";
//     }
// });

// const params = 'waveHeight,airTemperature';
let weather = {
    apiKey: "2c14e2efcecd7c8d853678a93daed5b2",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + this.apiKey
        ).then ((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
         const {name} = data;
         const {icon, description} = data.weather[0];
         const {temp, humidity} = data.main;
         const {speed} = data.wind;
         console.log(name,icon,description,temp,humidity, speed);
         document.querySelector(".city").innerHTML = "Weather in " + name;
         document.querySelector(".temp-degree").innerHTML = temp + " C";
         document.querySelector(".temp-description").innerHTML = "Current conditions: " + description + " ,humidity: " + humidity + " , speed:" + speed;
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value) 
    }
};

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});