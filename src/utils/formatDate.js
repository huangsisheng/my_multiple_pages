export const nowDate = function () {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let houre = now.getHours()
    let minute = now.getMinutes()
    if (month < 10) {
        month = `0${month}`
    }
    if (day < 10) {
        day = `0${day}`
    }
    if (houre < 10) {
        houre = `0${houre}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    return `${year}-${month}-${day}`
}


export const transformDate = function (str) {
    return `${str.replace(/\s/, 'T')}:00.000Z`
}

export const changeDate = function (str) {
    var myDate = new Date(str);
    let year = myDate.getFullYear()
    let month = myDate.getMonth() + 1
    let day = myDate.getDate()
    let houre = myDate.getHours()
    let minute = myDate.getMinutes()
    if (month < 10) {
        month = `0${month}`
    }
    if (day < 10) {
        day = `0${day}`
    }
    if (houre < 10) {
        houre = `0${houre}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    return `${year}/${month}/${day} ${houre}:${minute}`
}