// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const seattleWeather = document.getElementById('weather-head');
seattleWeather.textContent = "February 10 Weather Forecast, Seattle"; 
// Change the styling of every element with class "sun" to set the color to "orange"
const sunElements = document.querySelectorAll('.sun');
sunElements.forEach(function(sunElement){
    sunElement.style.color = 'orange';
}); 
// Change the class of the second <li> from to "sun" to "cloudy"
const weatherList = document.getElementById('weather');
const secondLiElement = weatherList.querySelector('li:nth-child(2)');
secondLiElement.classList.remove('sun');
secondLiElement.classList.add('cloudy');
