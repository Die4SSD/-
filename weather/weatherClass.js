export class Weather{
    constructor(cityName){
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0acc7e47f2d080451876a4e8e20b581e&lang=ru`
    this.url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0acc7e47f2d080451876a4e8e20b581e&lang=ru`
    }
   async getWeather() {
        this.weather = await fetch(this.url)
        .then(res => res.json())
        .catch(err =>err)
        return this
    }
    async getWeather5Days(){
        this.weather5Days = await fetch(this.url5Days)
        .then(res => res.json())
        .catch(err =>err)
        return this
    }
}