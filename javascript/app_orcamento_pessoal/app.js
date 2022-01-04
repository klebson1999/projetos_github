// CONSTRUÇÃO DA CLASSE 'DESPESA'
class Despesa {
    constructor(dataenvio, ano, mes, dia, tipo, descricao, valor) {
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

// CONSTRUÇÃO DA CLASSE BD

class Bd {
    // CRIANDO PIMEIRA CHAVE CASO NÃO EXISTA
    constructor() {
        let id = localStorage.getItem('ID')
        if(id === null) {
            localStorage.setItem('ID', '')
        }
    } 
    // GRAVANDO ARQUIVO COM CHAVE ÚNICA
    gravar(d) {
        localStorage.setItem(geraStringAleatoria(), JSON.stringify(d))
    }

    recuperarTodosRegistros() {

        // Array de despesas
        let despesas = Array()
        for (let i = 1; i < localStorage.length; i++) {

            // set iteration key name
            let key = localStorage.key(i)
          
            // use key name to retrieve the corresponding value
            let value = JSON.parse(localStorage.getItem(key))
            
            // console.log the iteration key and value
             value.id = key
             despesas.push(value)
             
            
             
          }
          return despesas
          
          
    }
  
    pesquisar(despesa) {
        // Recuperando valores de localstorage
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()

        // Aplicando filtros de pesquisa.
        if(despesa.ano != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }
        if(despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        if(despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        if(despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        if(despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        if(despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
    }

    remover(id) {
        localStorage.removeItem(id)
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
        dataenvio = moment(Date.now()).format(),
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value)
    

    if(despesa.validarDados()) {
       bd.gravar(despesa)
       
       $('#modalrRegistroDespesa').modal('show')
       document.getElementById('modal_title').innerHTML = 'Gravação bem sucedida'
       document.getElementById('modal_title_div').className = 'modal-header text-success'
       document.getElementById('modal_conteudo').innerHTML = 'Despesa cadastrada com sucesso'
       document.getElementById('modal_btn_div').innerHTML = ''

       ano.value = ''
       mes.value = ''
       dia.value = ''
       tipo.value = ''
       descricao.value = ''
       valor.value = ''
   
    } else {

        $('#modalrRegistroDespesa').modal('show')
        document.getElementById('modal_title').innerHTML = 'Erro na gravação da despesa'
        document.getElementById('modal_title_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente.'
        document.getElementById('modal_btn_div').innerHTML = '<button type="button" class="btn btn-danger" data-dismiss="modal" id="modal_btn">Voltar e Corrigir</button>'
       
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

function carregaListaDespesa(despesas = Array(), filter = false) {

    if(despesas.length == 0 && filter == false) {
        despesas = bd.recuperarTodosRegistros()
    }
    
    // Selecionando o elemento tbody da tabela
    let listaDespesas = document.getElementById('listaDepesas')
    listaDespesas.innerHTML = ''
    
    // Percorrer o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach(function(d) {

        // Criando a liha (tr)
        let linha = listaDespesas.insertRow()
        // Criar as colunas (td)
        linha.insertCell(0).innerHTML = moment(d.dataenvio).format('DD/MM/YYYY HH:mm:ss')
        if(d.dia < 10) {
            d.dia = '0'+ d.dia
        }
        if(d.mes < 10) {
            d.mes = '0'+ d.mes
        } 
        linha.insertCell(1).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        switch(d.tipo) {
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break            
        }
        linha.insertCell(2).innerHTML = d.tipo
        linha.insertCell(3).innerHTML = d.descricao
        linha.insertCell(4).innerHTML = `R$ ${d.valor}`
        // Botão de excluão
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function() {
            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(5).append(btn)
    })
}


function pesquisarDespesas() {
    let dataenvio = ''
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(dataenvio, ano, mes, dia, tipo, descricao, valor)
    let despesas = bd.pesquisar(despesa)

    carregaListaDespesa(despesas, true)

}