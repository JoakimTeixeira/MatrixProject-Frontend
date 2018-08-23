var sistema = new SistemaCadastro();
var edicao = false;

mostrarDadosNaTabela();

function editarDados(email){
    edicao = true;
    var participante = sistema.obterParticipante(email);

    document.getElementById('nome').value = participante.nome;
    document.getElementById('sobrenome').value = participante.sobrenome;
    var email = document.getElementById('email');
    email.value = participante.email;
    email.disabled = true;
    document.getElementById('idade').value = participante.idade;
    document.getElementById('nota').value = participante.nota;

    var sexoRadio = Array.from(document.querySelectorAll('input[name=sexo_radio]')).find(function(element){
        return element.value == participante.sexo;
    });

    sexoRadio.checked = true;
}; 

function excluirDados(email){
    sistema.removerParticipante(email);
    window.location.reload(true);
}; 

function mostrarDadosNaTabela(){
    sistema.obterParticipantes().forEach(imprimirTabela);

    function imprimirTabela(participante, indice){

        var sexo, aprovado;
        if (participante.sexo == 1)
            sexo = 'Masculino';
        else
            sexo = 'Feminino';

        if (participante.aprovado)
            aprovado = 'Aprovado';
        else
            aprovado = 'Reprovado';

        document.getElementById('tabela').innerHTML += '<tr><td>' + participante.nome + ' ' + participante.sobrenome +
            '</td><td>' + participante.idade + '</td><td>' + sexo + '</td><td>' + aprovado + '</td><td>' +
            '<a href= "javascript:void(0)" onclick= "editarDados(\'' + participante.email + '\')" >Editar</a>' +
            ' ' + '<a href= "javascript:void(0)" onclick= "excluirDados(\'' + participante.email + '\')" >Excluir</a>' +
            '</td></tr>';        
    }
};  

function verificarCampo(){} //não consigo verificar campo nulo
 
function cadastrarParticipantes(){

    if(edicao){
        sistema.editarParticipante(
            document.getElementById('nome').value,
            document.getElementById('sobrenome').value,
            document.getElementById('email').value,
            document.getElementById('idade').value,
            document.querySelector('input[name=sexo_radio]:checked').value,
            document.getElementById('nota').value
        );
    }
    else{
        sistema.adicionarParticipante(
            document.getElementById('nome').value,
            document.getElementById('sobrenome').value,
            document.getElementById('email').value,
            document.getElementById('idade').value,
            document.querySelector('input[name=sexo_radio]:checked').value
        );
    }

    sistema.adicionarNotaAoParticipante(
        document.getElementById("email").value, 
        document.getElementById("nota").value
    );   
    
    window.location.reload(true);
}