  //  Variáveis dos elementos da página
   var msgSucesso = $('#alert-cadastro-tarefa-sucesso')
   var msgErro = $('#alert-cadastro-tarefa-erro')
  
  //  Função que cria o item na tabela
   $('#btn-save').click(function(){
    var itemInput = $('#item')
    var qntInput = $('#quantidade')
    var precoInput = $('#preco')

    // Criando os elementos que irão na tabela
    var linha = $('<tr/>')
    linha.addClass('linha-tarefa')
    var colunaItem = $('<td/>')
    var colunaQnt = $('<td/>')
    var colunaPreco = $('<td/>')
    colunaPreco.addClass('preco-item')
    var tdButton = $('<td/>')
    var btnExcluir = $('<button/>')

    // Adicionando as propriedades do botão excluir
    btnExcluir.html('Excluir')
    btnExcluir.addClass('btn btn-dark')
    btnExcluir.addClass('exclude')
    btnExcluir.click((e) => {
      e.target.parentNode.parentNode.remove()
    })

    // Validando o formulário
    if(!itemInput.val() || !qntInput.val() || !precoInput.val()) {
      msgSucesso.hide()
      msgErro.show()
      return false;
    }
    else {
      msgErro.hide()
      msgSucesso.show()
      setTimeout(() => {
        msgSucesso.hide()
      }, 3000)

      // Colocando os textos dos inputs nos elementos
      colunaItem.html(itemInput.val())
      colunaQnt.html(qntInput.val())
      colunaPreco.html(precoInput.val())
      
      // Zerando os valores dos inputs
      itemInput.val('')
      qntInput.val('')
      precoInput.val('')

      // Inserindo os elementos na tabela
      tdButton.append(btnExcluir)
      linha.append(colunaItem)
      linha.append(colunaQnt)
      linha.append(colunaPreco)
      linha.append(tdButton)
      $('#tabela-compras').append(linha)
      return false;
    }
   });

  //  Máscara de valor para o campo de preço
   $(function(){
      $('#preco').maskMoney({
        prefix:'R$ ',
        allowNegative: true,
        thousands:'.', decimal:',',
        affixesStay: true});
  }) 