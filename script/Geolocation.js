import data from './Data.js'
import getClimate from './Api.js'

export default async function getLocation() {
    if ('geolocation' in navigator) {
        const watcher = await navigator.geolocation.watchPosition((position) => {

            data.positionClient.latitude = position.coords.latitude
            data.positionClient.longitude = position.coords.longitude

            getClimate()

            navigator.geolocation.clearWatch(watcher)
        },
                
        (error) => {
            alert('Busca de clima padrão vem do Município de Foz de Iguaçu/BR')
            console.log(error)
            getClimate()

        },
    )
    } else {
        alert('Não foi possível pegar sua Localização!!!')
        alert('Busca de Clima padrão vem do Município de Foz de Iguaçu/BR')
        getClimate()

    }
}
