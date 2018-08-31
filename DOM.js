var sistema = new SistemaCadastro();
var edicao = false;

mostrarDadosNaTabela();

function editarDados(id){
    edicao = true;
    sistema.obterParticipante(id)

        .then(function (participante){
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
        })
}; 

function excluirDados(id){
    sistema.removerParticipante(id)

        .then(function(){
            window.location.reload(true);
        })
};

function mostrarDadosNaTabela(){

    sistema.obterParticipantes()
        .then(function(participantes){
            participantes.forEach(imprimirTabela);
        })        

        function imprimirTabela(participante){

            var sexo, aprovado;
            if (participante.sexo == 1)
                sexo = 'Masculino';
            else
                sexo = 'Feminino';

            if (participante.aprovado)
                aprovado = 'Aprovado';
            else
                aprovado = 'Reprovado';

            document.getElementById('tabela').innerHTML += '<tr><td>' + participante.id + '</td><td>' + participante.nome + ' ' + participante.sobrenome +
                '</td><td>' + participante.idade + '</td><td>' + sexo + '</td><td>' + participante.nota + '</td><td>' + aprovado + '</td><td>' +
                '<a href= "javascript:void(0)" onclick= "editarDados(\'' + participante.id + '\')" >Editar</a>' +
                ' ' + '<a href= "javascript:void(0)" onclick= "excluirDados(\'' + participante.id + '\')" >Excluir</a>' +
                '</td></tr>';        
        }
};  

function verificarCampo(){} //não consigo verificar campo nulo
 
function cadastrarParticipantes(){

    sistema.obterParticipantes()

        .then(function (participante){
            if(edicao){        
                sistema.editarParticipante( 
                    participante.id,                       
                    document.getElementById('nome').value,
                    document.getElementById('sobrenome').value,            
                    document.getElementById('idade').value,
                    document.querySelector('input[name=sexo_radio]:checked').value,
                    document.getElementById('nota').value
                )
        
                .then(function (){
                    window.location.reload(true);
                })
            }
            else{
                sistema.adicionarParticipante(
                    document.getElementById('nome').value,
                    document.getElementById('sobrenome').value,
                    document.getElementById('email').value,
                    document.getElementById('idade').value,
                    document.querySelector('input[name=sexo_radio]:checked').value,
                    document.getElementById('nota').value          
                )     
                
                .then(function (){
                    window.location.reload(true);
                })
        
                .catch(function (mensagem){
                    alert(mensagem);
                    window.location.reload(true);
                })
            } 
        
            event.preventDefault();
            event.stopPropagation();
        })
    
};