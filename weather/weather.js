import {Weather} from "./weatherClass.js"
const getWidget = new Weather
async function getWeatherWidget() {
    const weather = await new getWidget('Minsk').getWeather()
    let temperature = Math.round(weather.weather.main.temp-273,15)
    let cityName = weather.weather.name
    let weatherIcon = weather.weather.weather[0].icon
    let weatherDescription = weather.weather.weather[0].description
    let weatherWind = weather.weather.wind.speed
    function toHTML() {
        document.getElementById('bodyID').innerHTML += `<div id='divID'><p>Сейчас в ${cityName}</p>
                                                        <p> ${temperature} °C ${weatherDescription}</p>
                                                        <p>Ветер: ${weatherWind} м/с</p>
                                                        <img src ="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
                                                        <h3 id="close" onclick="this.parentElement.style.display = 'none';">X</h3>
                                                        <input type = button id= button value = "Прогноз на 3 дня" onclick=>
                                                        <div>`
    }
    toHTML();
}
async function getWeatherWidget5Day(){
    const weather5Days = await new Weather('Minsk').getWeather5Days()
    let temperature = (Math.round(weather5Days.weather5Days.list[0].main.temp-273,15))
    let cityName = (weather5Days.weather5Days.city.name)
    let weatherIcon = (weather5Days.weather5Days.list[0].weather[0].icon)
    let weatherDescription = (weather5Days.weather5Days.list[0].weather[0].description)
    let weatherWind = (weather5Days.weather5Days.list[0].wind.speed)
    function toHTML() {
        document.getElementById('bodyID').innerHTML += `<div id='divID2'><p>Сегодня в ${cityName}</p>
                                                        <p> ${temperature} °C ${weatherDescription}</p>
                                                        <p>Ветер: ${weatherWind} м/с</p>
                                                        <img src ="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
                                                        <h3 id="close" onclick="this.parentElement.style.display = 'none';">X</h3>
                                                        <div>`
    }
    toHTML()
}
async function getWeatherWidget5DayTomorrow(){
    const weather5Days = await new Weather('Minsk').getWeather5Days()
    let temperature = (Math.round(weather5Days.weather5Days.list[7].main.temp-273,15))
    let cityName = (weather5Days.weather5Days.city.name)
    let weatherIcon = (weather5Days.weather5Days.list[7].weather[0].icon)
    let weatherDescription = (weather5Days.weather5Days.list[7].weather[0].description)
    let weatherWind = (weather5Days.weather5Days.list[7].wind.speed)
    function toHTML() {
        document.getElementById('bodyID').innerHTML += `<div id='divID3'><p>Завтра в ${cityName}</p>
                                                        <p> ${temperature} °C ${weatherDescription}</p>
                                                        <p>Ветер: ${weatherWind} м/с</p>
                                                        <img src ="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
                                                        <h3 id="close" onclick="this.parentElement.style.display = 'none';">X</h3>
                                                        <div>`
    }
    toHTML()
}
async function getWeatherWidget5DayDoubleTomorrow(){
    const weather5Days = await new Weather('Minsk').getWeather5Days()
    let temperature = (Math.round(weather5Days.weather5Days.list[14].main.temp-273,15))
    let cityName = (weather5Days.weather5Days.city.name)
    let weatherIcon = (weather5Days.weather5Days.list[14].weather[0].icon)
    let weatherDescription = (weather5Days.weather5Days.list[14].weather[0].description)
    let weatherWind = (weather5Days.weather5Days.list[14].wind.speed)
    function toHTML() {
        document.getElementById('bodyID').innerHTML += `<div id='divID4'><p>Послезавтра в ${cityName}</p>
                                                        <p> ${temperature} °C ${weatherDescription}</p>
                                                        <p>Ветер: ${weatherWind} м/с</p>
                                                        <img src ="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
                                                        <h3 id="close" onclick="this.parentElement.style.display = 'none';">X</h3>
                                                        <div>`
    }
    toHTML()
}
getWeatherWidget()
//getWeatherWidget5Day()
//getWeatherWidget5DayTomorrow()
//getWeatherWidget5DayDoubleTomorrow()
//86400 1 день в unix
