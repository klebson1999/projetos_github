function getDadosUF(uf) {
    fetch("https://covid19-brazil-api.now.sh/api/report/v1", {
      "method": "GET"
    })
      .then(response => response.json())
      .catch(err => console.error(err))
      .then(response => {

        for (let i in response.data) {

          // Dados
          let dados = response.data[i]

          let tabelaRow = document.createElement('tr')

          let colUf = document.createElement('th')
          colUf.setAttribute('scope', 'row')
          colUf.innerHTML = dados.uf

          let colEstado = document.createElement('td')
          colEstado.innerHTML = dados.state

          let colCasos = document.createElement('td')
          colCasos.innerHTML = dados.cases

          let colMortes = document.createElement('td')
          colMortes.innerHTML = dados.deaths

          let colSuspeitos = document.createElement('td')
          colSuspeitos.innerHTML = dados.suspects

          let tabela = document.getElementById('corpoTabela')

          tabela.appendChild(tabelaRow)
          tabelaRow.appendChild(colUf)
          tabelaRow.appendChild(colEstado)
          tabelaRow.appendChild(colCasos)
          tabelaRow.appendChild(colMortes)
          tabelaRow.appendChild(colSuspeitos)
        }
      })
  }
