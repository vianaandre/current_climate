export default function format (a) {
    // formatando o climate
    const formatClimate = String(`${Math.floor(a.climate.currentClimate)}ºC`)
    a.climate.currentClimate = formatClimate

    const windSpeedKM = a.climate.windSpeed * 3.6
    a.climate.windSpeed = windSpeedKM.toFixed(0)
}