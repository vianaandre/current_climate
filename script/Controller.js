import data from './Data.js';

export default function controller () {
    const climateCurrent = document.getElementById('climate_current')
    const locationCurrent = document.getElementById('location_current')
    const dayCurrent = document.getElementById('day_current')
    const urCurrent = document.getElementById('ur_current')
    const hpaCurrent= document.getElementById('hpa_current')
    const windSpeed = document.getElementById('wind_speed')
    const description = document.getElementById('description_current')
    const iconCurrent = document.getElementById('icon_current')

    climateCurrent.textContent = data.climate.currentClimate
    locationCurrent.textContent = `${data.positionClient.county}/${data.positionClient.country}`

    const amAndpm = data.positionClient.hours >= 12 ? 'AM' : 'PM' 
    dayCurrent.textContent = `${data.getTime.day}, ${data.getTime.hours}:00 ${amAndpm}`

    urCurrent.textContent = `${data.climate.humidity}% UR`
    hpaCurrent.textContent = `${data.climate.hpa} hPa`
    windSpeed.textContent = `${data.climate.windSpeed} Km/h`
    description.textContent = `${data.climate.description}`
    iconCurrent.src = `${data.climate.icon}`
}