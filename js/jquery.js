$(document).ready(() =>{

   $('#form-cadastro-tarefa').submit(function(e){
    let tarefa = $('#tarefa').val();
    let data = $('#data').val();

    // Validando o formulário
    if(!tarefa || !data){
        $('#alert-cadastro-tarefa-erro').show();
        $('#alert-cadastro-tarefa-sucesso').hide();
        return false;
    } else {
        $('#alert-cadastro-tarefa-sucesso').show();
        $('#alert-cadastro-tarefa-erro').hide();
    }
        

    e.preventDefault();
   });
   $('.data').mask('00/00/0000')
});