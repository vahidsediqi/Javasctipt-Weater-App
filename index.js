let weather = {
    apikey: "039f8b2104b27aa8da76a526dabaeec5",
    fetchWeather:  function(city) {
        getData =  fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${this.apikey}`
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const speed = data.wind.speed;
        console.log(name, icon,description, temp, humidity, speed,);
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerText = temp + ' °C';
        document.querySelector('.desc').innerText = description;
        document.querySelector('.humidity').innerText = 'Humidity ' + humidity + ' %';
        document.querySelector('.wind').innerHTML = 'Wind Speed ' + speed + ' km/h'
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector('.btn').addEventListener('click', () => {
    weather.search()
} )

