var sistema = new SistemaCadastro();

var indice = 0;

function verificarSexo(){
    if(document.getElementById("masculino").checked === true)
        return "masculino";
    else
        if(document.getElementById("feminino").checked === true)
            return "feminino";       
}

function adicionar(){
    sistema.adicionarParticipante(
        document.getElementById("nome").value,
        document.getElementById("sobrenome").value,
        document.getElementById("email").value,
        document.getElementById("idade").value,
        verificarSexo()      
    );    
}    

function verificarAprovado(){ 
    sistema.adicionarNotaAoParticipante(sistema.participantes[indice].email, document.getElementById("nota").value);    

    if (sistema.verificarSeParticipanteEstaAprovado(sistema.participantes.email) === true)
        return aprovado;
    else
        if (sistema.verificarSeParticipanteEstaAprovado(sistema.participantes.email) === false)
            return reprovado;    
}

function enviarParaLocalStorage(){
    adicionar();
    var aprovacaoVerificada = verificarAprovado();

    var formulario = {
        nome: sistema.participantes.nome,
        sobrenome: sistema.participantes.sobrenome,
        email: sistema.participantes.email,
        idade: sistema.participantes.idade,
        nota: sistema.partipantes.nota,
        sexo: sexoVerificado,
        aprovado: aprovacaoVerificada,
    }

    localStorage.setItem ("formulario", JSON.stringify(formulario));
    indice++;
}
    
    //teste local storage
    //localStorage.setItem("email", document.getElementById("email").value);    