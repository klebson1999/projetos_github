// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.

function dateDinamic(dia) {

    let valueDay = dia.value ?? ""

    let dateToday = new Date()
    let dateDay = String(valueDay)
    let dateMonth = dateToday.getMonth()
    let dateYear = dateToday.getFullYear()

    let concatDate = dateYear + '-' + dateMonth + '-' + dateDay
    let parseDate = new Date(concatDate)

    return (parseDate)


}
