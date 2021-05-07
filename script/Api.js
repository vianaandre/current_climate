import data from '/current_climate/script/Data.js'
import controller from '/current_climate/script/Controller.js'

export default async function getDados () {
    const long = data.positionClient.longitude
    const lati = data.positionClient.latitude

    // busca fetch do clima atual
    const climateApi = await fetch(`${data.KeysApi.urlBase.urlClimate}lat=${data.positionClient.latitude}&lon=${data.positionClient.longitude}&lang=${data.KeysApi.lang}&units=${data.KeysApi.units}&appid=${data.KeysApi.apiKey}`)
    // busca da cidade 
    const geolocationApi = await fetch(`${data.KeysApi.urlBase.urlGeolocation}lat=${data.positionClient.latitude}&lon=${data.positionClient.longitude}&lang=${data.KeysApi.lang}&appid=${data.KeysApi.apiKey}`)

    // transformando em JSON
    const climateJson = await climateApi.json()
    const geolocationJson = await geolocationApi.json()

    // mandando para o modulo de dados
    data.positionClient.county = geolocationJson[0].name
    data.positionClient.country = geolocationJson[0].country
    data.climate.currentClimate = `${Math.floor(climateJson.current.temp)} ºC`
    data.climate.humidity = climateJson.current.humidity
    data.climate.hpa = climateJson.current.pressure
    data.climate.windSpeed = `${(climateJson.current.wind_speed * 3.6).toFixed(0)}`
    data.climate.description = climateJson.current.weather[0].description
    data.climate.icon = `/current_climate/assets/${climateJson.current.weather[0].icon}.svg`

    // criando o objeto que vai para o vetor de previsão 
    const objClimate = await climateJson.daily.map((dataValue) => {
        return {
            icon: '/current_climate/assets/' + dataValue.weather[0].icon + '.svg',
            description: dataValue.weather[0].description,
            tempMax: Math.floor(dataValue.temp.max),
            temMin: Math.floor(dataValue.temp.min)
        }
    })

    // fazendo o push para o vetor de previsão 
    data.climatePrediction.push(objClimate)

    // chamando a função de mostrar os dados na tela
    const printingScreen = await controller()
}
