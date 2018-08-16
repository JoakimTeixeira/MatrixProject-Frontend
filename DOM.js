var sistema = new SistemaCadastro();

function editarDados(email){}; //implementar função

function excluirDados(email){};  //implementar função

function mostrarDadosNaTabela(){};  //implementar função

function verificarCampo(){} //não consigo verificar campo nulo
 

function verificarSexo(){
    if(document.getElementById("masculino").checked === true)
        return 1;
    else
        if(document.getElementById("feminino").checked === true)
            return 2;       
};

function capturarParticipantes(){

    sistema.adicionarParticipante(
        document.getElementById("nome").value,
        document.getElementById("sobrenome").value,
        document.getElementById("email").value,
        document.getElementById("idade").value,
        verificarSexo()      
    );    

    sistema.adicionarNotaAoParticipante(
        document.getElementById("email").value, 
        document.getElementById("nota").value
    );   
    
    window.location.reload(true);

}