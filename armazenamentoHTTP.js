function ArmazenamentoHTTP(){

    function adicionar(participante){
        axios.post('http://matrix.avalie.net/api/participantes/' + id, 
        {
            nome: participante.nome,
            sobrenome: participante.sobrenome,
            email: participante.email,
            idade: participante.idade,
            sexo: participante.sexo,
            nota: participante.nota,
            aprovado: participante.aprovado
        });
    }

    function obterTodosParticipantes(){
        axios.get('http://matrix.avalie.net/api/participantes/')
            .then(function (response) {
                
            })
    }
    
    function buscarParticipante(key, atributo){}

    function editar(key, array){}

    function remover(key, atributo){}


    return{
        adicionar,
        obterTodosParticipantes,
        buscarParticipante,
        editar,
        remover
    };
}

/*To-do list:

    ☼ Enviar novo participante com POST
    ☼ Obter todos participantes com GET, deserializar objeto e enviar para a tabela    
    ☼ Pegar elemento JSON, procurar participante por getElementByID 
    ☼ Procurar participante por getElementByID e utilizar PUT
    ☼ Procurar participante com getElementbyID e remover com DELETE
*/