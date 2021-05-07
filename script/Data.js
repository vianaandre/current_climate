import nameOfDay from './utils/nameOfDays.js'

// criando um data atual
const currentData = new Date()

// criando o objeto que será manipulado para mandar os dados
const data = {
    positionClient: {
        latitude: -25.5478,
        longitude: -54.5881,
        county: null,
        country: 'BR',
    },

    climate: {
        currentClimate: null,
        humidity: null,
        hpa: null,
        windSpeed: null,
        description: null,
        icon: '../assets/icn_pergunta.svg',
    },

    climatePrediction: [],

    getTime: {
        dayMonth: currentData.getDate(),
        day: nameOfDay.daysWeek[currentData.getDay()],
        dayAbreviated: nameOfDay.daysWeekAbreviated[currentData.getDay()],
        month: nameOfDay.mounthsYear[currentData.getMonth()],
        hours: currentData.getHours()
    },

    KeysApi: {
        apiKey: '005bae086b2f834f591f43fad4011bb5',
        urlBase: {
            urlClimate: 'https://api.openweathermap.org/data/2.5/onecall?',
            urlGeolocation: 'https://api.openweathermap.org/geo/1.0/reverse?'
        },
        lang: 'pt_br',
        units: 'metric'
    }
}

export default data