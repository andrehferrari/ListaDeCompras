   $('#btn-save').click(function(){
    var linha = $('<tr/>')
    linha.addClass('linha-tarefa')
    var colunaItem = $('<td/>')
    var colunaQnt = $('<td/>')
    var colunaPreco = $('<td/>')
    var tdButton = $('<td/>')
    var btnExcluir = $('<button/>')
    btnExcluir.addClass('exclude')
    btnExcluir.click((e) => {
      e.target.parentNode.parentNode.remove()
    })

    colunaItem.html($('#item').val())
    colunaQnt.html($('#quantidade').val())
    colunaPreco.html($('#preco').val())
    btnExcluir.html('Excluir')
    btnExcluir.addClass('btn btn-dark')

    tdButton.append(btnExcluir)
    linha.append(colunaItem)
    linha.append(colunaQnt)
    linha.append(colunaPreco)
    linha.append(tdButton)

    $('#tabela-compras').append(linha)
    return false;
   });

   $(function(){
      $('#preco').maskMoney({
        prefix:'R$ ',
        allowNegative: true,
        thousands:'.', decimal:',',
        affixesStay: true});
  }) 