const BASEURL =  "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=efa76ec18d618952c668c0c05e75c9a7&units=metric";
let input = document.querySelector("#input");
let searchimg = document.querySelector("#searchimg");
let dispimg = document.querySelector("#dispimage");

searchimg.addEventListener("click",()=>{
    let city = input.value;
    getdata(city); 
});


const getdata = async (city)=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efa76ec18d618952c668c0c05e75c9a7&units=metric`
    let response = await fetch(URL);
    let data = await response.json();

    let temperature = data.main.temp;
    let humidity = data.main.humidity;
    let windspeed = data.wind.speed;

    let tempdisp = document.querySelector("#temperature");
    tempdisp.innerText=Math.round(temperature) + "°C";

    let citydisp = document.querySelector("#city");
    citydisp.innerText=city;

    let valuesdisp = document.querySelector("#value");
    valuesdisp.innerText = humidity + "%"; 

    let windspeedisp = document.querySelector("#speed");
    windspeedisp.innerText = windspeed + "km/h";

    if(data.weather[0].main == "Clear")
    {
        dispimg.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Clouds")
    {
        dispimg.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "drizzle")
    {
        dispimg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        dispimg.src = "images/mist.png";
    }
    else if(data.weather[0].main == "rain")
    {
        dispimg.src = "images/rain.png";
    }
    else if(data.weather[0].main == "snow")
    {
        dispimg.src = "images/snow.png";
    }
    
}


