const diasSemanas = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta', 
    'Quinta', 
    'Sexta', 
    'Sábado', 
]
const mesAno = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const currentData = new Date()  

const data = {
    positionClient: {
        latitude: null,
        longitude: null,
        county: null,
        country: null,
    },

    climate: {
        currentClimate: null,
        humidity: null,
        hpa: null,
        windSpeed: null,
        description: null,
        icon: null,
    },

    getTime: {
        dayMonth: currentData.getDate(), 
        day: diasSemanas[currentData.getDay()], 
        month: mesAno[currentData.getMonth()], 
        hours: currentData.getHours()
    }
}

export default data;