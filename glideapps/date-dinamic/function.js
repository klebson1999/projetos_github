// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.

function bN (dia) {

    let dateToday = new Date()
    let dateDay = String(dia)
    let dateMonth = dateToday.getMonth()
    let dateYear = dateToday.getFullYear()

    let concatDate =  dateYear + '-' + dateMonth + '-' + dateDay
    let parseDate = new Date(concatDate)

    return (parseDate)

}
