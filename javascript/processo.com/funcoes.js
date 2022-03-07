function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

$("#btnPrint").live("click", function () {
    var divContents = $("#text").html();
    var printWindow = window.open('', '', 'height=2480,width=3508');
    printWindow.document.write('<html><head><title>Impressão</title>')
    printWindow.document.write('</head><body>')
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.print()
  });

  $('.dropdown-trigger').dropdown();
  $(document).ready(function() {
    $('input#cpf, textarea#textarea2').characterCounter();
  });
  
  $(document).ready(function() {
    $('input#celinscricao, textarea#textarea2').characterCounter();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });
  
  $(document).ready(function(){
    $('.tabs').tabs();
  });

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Assistente Social":null,
        "Auxiliar de Biblioteca":null,
        "Auxiliar de Informática":null,
        "Auxiliar de Desenvolvimento Infantil(Atuar em Escolas e Creches) Berçário e crianças de 4 e 5 anos":null,
        "Cuidador para Educação Especial":null,
        "Engenheiro Civil":null,
        "Intérprete de Língua Brasileira de Sinais – LIBRAS":null,
        "Ledor/Transcritor de Braille":null,
        "Monitor de Educação Especial":null,
        "Monitor da EJA 1º ao 5º Ano":null,
        "Monitor de Arte":null,
        "Monitor de Ciências":null,
        "Monitor de Dança":null,
        "Monitor de Educação Física":null,
        "Monitor de Geografia":null,
        "Monitor de História":null,
        "Monitor de Língua Inglesa":null,
        "Monitor de Língua Portuguesa":null,
        "Monitor de Matemática":null,
        "Monitor de Música":null,
        "Monitor Polivalente – Educação Infantil":null,
        "Monitor Polivalente - Ensino Fundamental I 1º ao 5º Ano":null,
        "Monitor/Instrutor de Língua Brasileira de Sinais (LIBRAS) – Educação Infantil e de 1º ao 9º ano":null,
        "Monitor de Ônibus Escolar (Zona Urbana) Escola Douglas Apratto":null,
        "Monitor de Ônibus Escolar (Zona Urbana) Escola Santa Luzia":null,
        "Monitor de Ônibus Escolar (Zona Urbana) Escola Manoel Soares":null,
        "Monitor de Ônibus Escolar (Zona Urbana) Escola Barão de Penedo":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Konrad":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Prosperidade":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Pescoço":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Palmeira Alta":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Castanho Grande":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Espigão":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Imbira I e II":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Ilha das Canas":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Campo Grande":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Tapera":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Catrapó":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Carapina":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Marizeiro":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Cerquinha das Laranjas":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Marituba de Cima":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Marituba do Peixe":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Ponta Mofina":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Tabuleiro dos Negros":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Capela/Murici":null,
        "Monitor de Ônibus Escolar (Zona Rural) Povoado Cooperativa I e II Núcleo":null,
        "Motorista de ônibus":null,
        "Nutricionista":null,
        "Psicóloga":null,
        "Técnico em Construção Civil":null
      },
    });
  });
     