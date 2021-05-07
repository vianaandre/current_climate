<<<<<<< HEAD
import data from '/current_climate/script/utils/Data.js'
=======
import data from '/current_climate/script/Data.js'
>>>>>>> ac8fa70893ace950431404af3ed4e8baac46ff94
import nameOfDays from '/current_climate/script/utils/nameOfDays.js'

const currentData = new Date()

let valueCurrent = 0
let currentDay = currentData.getDay()

export default function dayCounter(element) {
    valueCurrent += 1
    currentDay += 1
    if(currentDay > 6) {
        currentDay = 0
    }

    element.innerHTML = `${data.getTime.dayMonth + valueCurrent} <br /> ${nameOfDays.daysWeekAbreviated[currentDay].toLocaleLowerCase()}`
}
