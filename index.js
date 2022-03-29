let weather = {
    apikey: "039f8b2104b27aa8da76a526dabaeec5",
    fetchWeather:  function() {
        getData =  fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
            ).then(response => response.json())
            .then((data) => console.log(data))
    }
}

weather.fetchWeather()