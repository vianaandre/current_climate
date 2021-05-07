import data from '/current_climate/script/Data.js';
import dayCounter from '/current_climate/script/utils/dayCounter.js'

export default async function controller () {
    // selecionando os elementos que serão usados
    const climateCurrent = document.getElementById('climate_current')
    const locationCurrent = document.getElementById('location_current')
    const dayCurrent = document.getElementById('day_current')
    const urCurrent = document.getElementById('ur_current')
    const hpaCurrent= document.getElementById('hpa_current')
    const windSpeed = document.getElementById('wind_speed')
    const description = document.getElementById('description_current')
    const iconCurrent = document.getElementById('icon_current')
    const currentData = document.getElementById('current_data')
    const elementsPrediction = document.querySelectorAll('.js .content_site .previsao .previsao_content .information_previsao .information_data p')
    const elementsDescription = document.querySelectorAll('.js .content_site .previsao .previsao_content .information_previsao .information_temperature .text')
    const elementsMin = document.querySelectorAll('.js .content_site .previsao .previsao_content .information_previsao .information_temperature .information .min')
    const elementsMax = document.querySelectorAll('.js .content_site .previsao .previsao_content .information_previsao .information_temperature .information .max')
    const elementsIcon = document.querySelectorAll('.js .content_site .previsao .previsao_content .information_previsao .information_icn img')

    // mandando os dados
    climateCurrent.textContent = data.climate.currentClimate
    locationCurrent.textContent = `${data.positionClient.county}/${data.positionClient.country}`

    const amAndpm = data.positionClient.hours >= 12 ? 'AM' : 'PM' 
    dayCurrent.textContent = `${data.getTime.day}, ${data.getTime.hours}:00 ${amAndpm}`

    urCurrent.textContent = `${data.climate.humidity}% UR`
    hpaCurrent.textContent = `${data.climate.hpa} hPa`
    windSpeed.textContent = `${data.climate.windSpeed} Km/h`
    description.textContent = `${data.climate.description}`
    iconCurrent.src = data.climate.icon
    currentData.textContent = `${data.getTime.dayAbreviated}, ${data.getTime.dayMonth} ${data.getTime.month}`

    // laço forEach para mandar os dados para os respectivos lugares
    elementsPrediction.forEach((element) => {
        dayCounter(element)
    })
    elementsDescription.forEach((element, index) => {
        element.textContent = data.climatePrediction[0][index].description
    })
    elementsMin.forEach((element, index) => {
        element.textContent = `${data.climatePrediction[0][index].temMin}ºC`
    })
    elementsMax.forEach((element, index) => {
        element.textContent = `${data.climatePrediction[0][index].tempMax}ºC`
    })
    elementsIcon.forEach((element, index) => {
        element.src = `${data.climatePrediction[0][index].icon}`
    })
    
}
