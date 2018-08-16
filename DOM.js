var sistema = new SistemaCadastro();

function editarDados(email){}; //implementar função

function excluirDados(email){};  //implementar função

function mostrarDadosNaTabela(){};  //implementar função

function verificarCampo(){
    if(
        document.getElementById("nome").value === null ||
        document.getElementById("sobrenome").value === null ||
        document.getElementById("email").value === null ||
        document.getElementById("idade").value === null ||
        verificarSexo() === undefined      
    )
    document.getElementById("submit").disabled = true;
    
    else
        document.getElementById("submit").disabled = false

}

function verificarSexo(){
    if(document.getElementById("masculino").checked === true)
        return 1;
    else
        if(document.getElementById("feminino").checked === true)
            return 2;       
};

function capturarParticipantes(){
    verificarCampo();
      
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