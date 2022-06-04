
window.function = function(dia) {
    const dateToday = new Date()
    // Subtraindo e retirando o 'ano' e o 'mês' do resultado
    let todayMounthNumber = dateToday.getMonth()

    // Retornando o nome do mês
    switch (todayMounthNumber) {
        case 0:
            todayMounthNumber = "Janeiro";
            break;
        case 1:
            todayMounthNumber = "Fevereiro";
            break;
        case 2:
            todayMounthNumber = "Março";
            break;
        case 3:
            todayMounthNumber = "Abril";
            break;
        case 4:
            todayMounthNumber = "Maio";
            break;
        case 5:
            todayMounthNumber = "Junho";
            break;
        case 6:
            todayMounthNumber = "Julho";
            break;
        case 7:
            todayMounthNumber = "Agosto";
            break;
        case 8:
            todayMounthNumber = "Setembro";
            break;
        case 9:
            todayMounthNumber = "Outubro";
            break;
        case 10:
            todayMounthNumber = "Novembro";
            break;
        case 11:
            todayMounthNumber = "Dezembro";
            break;
        default:
            todayMounthNumber = "Mês inexistente";
    }
    // Data inicial e final de envio 
    let dateDayInit = 1
    let dateDayEnd = 15
    let dateYearToday = dateToday.getFullYear()
    let numberMounthToday = dateToday.getMonth() +1
    if (numberMounthToday === 13) {
        numberMounthToday = 01
        dateYearToday = dateToday.getFullYear() +1
    } 
    // Concatenando data para o mês e ano correto
    let concatDateInit = dateYearToday + '-' + numberMounthToday + '-' + dateDayInit
    let concatDateEnd = dateYearToday + '-' + numberMounthToday + '-' + dateDayEnd
    // Transformando novamente as strings em data legível para realizar operações
    let parseDateInit = new Date(concatDateInit)
    let parseDateEnd = new Date(concatDateEnd)
    // Formatando data para PT
    let dateFormat = parseDateEnd.toLocaleDateString(
        'pt-BR',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }
    )
    // Verificando se a data atual é válida
    let resultIfDate = dateToday >= parseDateInit && dateToday <= parseDateEnd ? 'FALSE' : 'TRUE'
    // Retornando numa única string todas as variáveis 
    let dateReturn = todayMounthNumber + '#' + dateYearToday + '#' + dateFormat + '#' + resultIfDate

    return dateReturn
}
