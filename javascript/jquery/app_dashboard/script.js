$(document).ready(() => {

    function carregarDinamicamente(link, file, local) {
        $(link).on('click',
            () => $.get(file, data => $(local).html(data))
        )
    }

    carregarDinamicamente('#documentacao', 'documentacao.html', '#pagina')
    carregarDinamicamente('#suporte', 'suporte.html', '#pagina')


    $('#competencia').on('change', e => {

        let competencia = $(e.target).val()
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: dados => {
                $('#numeroVendas').text(dados.numeroVendas)
                $('#totalVendas').text(dados.totalVendas)
                },
            error: erro => { console.log(erro) }
        })
    })


})