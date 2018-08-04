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
    sistema.verificarSeParticipanteEstaAprovado(sistema.participantes[indice].email);        
}

function enviarParaLocalStorage(){
    adicionar();    

    var formulario = {
        nome: sistema.participantes[indice].nome,
        sobrenome: sistema.participantes[indice].sobrenome,
        email: sistema.participantes[indice].email,
        idade: sistema.participantes[indice].idade,
        nota: sistema.participantes[indice].nota,
        sexo: sistema.participantes[indice].sexo,
        aprovado: sistema.participantes[indice].aprovado,
    }

    localStorage.setItem ("formulario", JSON.stringify(formulario));
    indice++;
}
    
    //teste local storage
    //localStorage.setItem("email", document.getElementById("email").value);    