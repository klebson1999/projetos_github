// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.

window.function = function (dia) {

    let valueDay = dia.value ?? ""

    let dateToday = new Date()
    let dateDay = String(dia)
    let dateMonth = dateToday.getMonth()
    let dateYear = dateToday.getFullYear()

    let concatDate = dateDay + '-' + dateMonth + '-' + dateYear
    let parseDate = new Date(concatDate)

    return (parseDate)

}
