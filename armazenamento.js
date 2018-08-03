var sistema = new SistemaCadastro();

function enviarParaLocalStorage(){
    sistema.adicionarParticipante();
    //teste local storage
    //localStorage.setItem("email", document.getElementById("email").value);    
}