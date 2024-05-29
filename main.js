let p = document.querySelector('.time')

const ReadDate = () => {
    let data = new Date()
    let second = data.getSeconds()
    let minute = data.getMinutes()
    let hour = data.getHours()
    let millisecond = data.getMilliseconds()

    p.innerHTML = `${hour}:${minute}:${second}:${millisecond}`
}

setInterval(() => {
    ReadDate()++
}, 10)

