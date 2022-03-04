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