// Data atual 
const dateToday = moment(Date.now())

window.function = function () {
    // Subtraindo e retirando o 'ano' e o 'mês' do resultado
    let dateBack = moment(dateToday).subtract(20, 'days')
    let dateYear = dateBack.format('YYYY')
    let numberMounth = dateBack.format('MM')
    // Nome do mês
    switch (numberMounth) {
        case '01':
            nameMounth = "Janeiro";
            break;
        case '02':
            nameMounth = "Fevereiro";
            break;
        case '03':
            nameMounth = "Março";
            break;
        case '04':
            nameMounth = "Abril";
            break;
        case '5':
            nameMounth = "Maio";
            break;
        case '6':
            nameMounth = "Junho";
            break;
        case '7':
            nameMounth = "Julho";
            break;
        case '8':
            nameMounth = "Agosto";
            break;
        case '9':
            nameMounth = "Setembro";
            break;
        case '10':
            nameMounth = "Outubro";
            break;
        case '11':
            nameMounth = "Novembro";
            break;
        case '12':
            nameMounth = "Dezembro";
            break;
        default:
            nameMounth = "Mês inexistente";
    }
    // Data inicial e final de envio 
    let dateDayInit = 1
    let dateDayEnd = 15
    let dateYearToday = dateToday.format('YYYY')
    let numberMounthToday = dateToday.format('MM')

    let concatDateInit = dateYearToday + '-' + numberMounthToday + '-' + dateDayInit
    let concatDateEnd = dateYearToday + '-' + numberMounthToday + '-' + dateDayEnd
    let parseDateInit = new Date(concatDateInit)
    let parseDateEnd = new Date(concatDateEnd)
    // Verificando se a data atual é válida
    let resultIfDate = dateToday >= parseDateInit && dateToday <= parseDateEnd ? 'FALSE' : 'TRUE'

    let dateReturn = [numberMounth, nameMounth, dateYear, parseDateEnd, resultIfDate]

    return dateReturn
}

