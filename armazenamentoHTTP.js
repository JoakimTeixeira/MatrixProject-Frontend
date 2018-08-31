
function Armazenamento(){ 
    
    const Url = 'http://matrix.avalie.net/api/participantes/';

    function adicionar(participante){
        return axios.post(Url, participante)
            .then(function (resultado){
                return resultado.data;
            })
            .catch(function (error){
                throw error.response.data.message;
            })
    }

    function obterTodosParticipantes(){        
        return axios.get(Url)
            .then(function (resultado){
                return resultado.data;
            })
    }

    function buscarParticipante(id){
        return axios.get(Url + id)
			.then(function (resultado) {
				return resultado.data;
			});
    }

    function editar(participante){
        return axios.put('http://matrix.avalie.net/api/participantes/' + participante.id, participante);
    }

    function remover(id){
        return axios.delete(Url + id)
        .then(function (resultado){
            return resultado.data;
        })
    }


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