import data from './Data.js'
import format from './utils/format.js'
import controller from './Controller.js'

export default async function getDados () {
    const long = data.positionClient.longitude
    const lati = data.positionClient.latitude
    const caminhoClimate = 'https://api.openweathermap.org/data/2.5'
    const caminhoLocation = 'https://api.openweathermap.org/geo/1.0/'

    const climateApi = await fetch(`${caminhoClimate}/onecall?lat=${lati}&lon=${long}&lang=pt_br&units=metric&lang=pt_br&appid=${chaveApi}`)
    const geolocationApi = await fetch(`${caminhoLocation}/reverse?lat=${lati}&lon=${long}&appid=${chaveApi}`)

    const climateJson = await climateApi.json()
    const geolocationJson = await geolocationApi.json()

    data.positionClient.county = geolocationJson[0].name
    data.positionClient.country = geolocationJson[0].country
    data.climate.currentClimate = climateJson.current.temp
    data.climate.humidity = climateJson.current.humidity
    data.climate.hpa = climateJson.current.pressure
    data.climate.windSpeed = climateJson.current.wind_speed
    data.climate.description = climateJson.current.weather[0].description
    data.climate.icon = `https://openweathermap.org/img/wn/${climateJson.current.weather[0].icon}.png`

    console.log(climateJson)

    const formatDate = await format({ ...data })

    const printingScreen = await controller()
}
