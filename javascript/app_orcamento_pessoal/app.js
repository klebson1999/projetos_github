/* NOTAS DE ATUALIZAÇÃO
# Falta inserir os índecis dinâmicos! => Aula 280
#
#
#
*/
// CONSTRUÇÃO DAS CLASSES
class Despesa {
    constructor(id, dataenvio, ano, mes, dia, tipo, descricao, valor) {
        this.id = id
        this.dataenvio = dataenvio
        this.ano = ano
        this.mes = mes 
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    
    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this [i] == null) {
                return false
            }
        } 
        return true
    }
}

class Bd {
    /*getProximoId(){
        let proximoId = localStorage.getItem('id')
    }*/
    gravar(d) {
        localStorage.setItem('despesa', JSON.stringify(d))
    }
}

let bd = new Bd()

// CONSTRUÇÃO DAS FUNÇÕES

function cadastrarDepesas() {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')

    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        id = geraStringAleatoria(),
        dataenvio = moment(Date.now()).format(),
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value)
    
    if(despesa.validarDados()) {
       bd.gravar(despesa)
       $('#sucessogravacao').modal('show')
    } else {
        $('#errogravacao').modal('show')
    }   
}


function geraStringAleatoria() {
    var idtemp = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < 12; i++) {
        idtemp += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return idtemp;
}
