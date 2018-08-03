var sistema = new SistemaCadastro();

function verificarSexo(){
    if(document.getElementById("masculino").checked === true)
        return "masculino";
    else
        if(document.getElementById("feminino").checked === true)
            return "feminino";       
}

function adicionar(sexo){
    sistema.adicionarParticipante(
        document.getElementById("nome").value,
        document.getElementById("sobrenome").value,
        document.getElementById("email").value,
        document.getElementById("idade").value,
        sexo        
    );
}    

function verificarAprovado(){
    var aprovado = 0;
    
    sistema.dicionarNotaAoParticipante(document.getElementById("email").value, document.getElementById("nota").value);

    if (sistema.verificarSeParticipanteEstaAprovado(document.getElementById("email").value) === true)
        return aprovado = aprovado;
    else
        if (sistema.verificarSeParticipanteEstaAprovado(document.getElementById("email").value) === false)
            return aprovado = reprovado;
}

function enviarParaLocalStorage(){
    var sexoVerificado = verificarSexo();
    adicionar(sexo) = sexoVerificado;
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
}
    
    //teste local storage
    //localStorage.setItem("email", document.getElementById("email").value);    
