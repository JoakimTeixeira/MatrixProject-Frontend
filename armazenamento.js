function Armazenamento(key){

    if(window.localStorage.getItem(key) === null)
        window.localStorage.setItem(key, "[]");

    function adicionar(participante){ 

        var conjuntoParticipantes = deserializar();
        conjuntoParticipantes.push(participante);
        serializar(conjuntoParticipantes);   

    }

    function obterTodosParticipantes(){
        return deserializar();
    }

    function buscarParticipante(key, atributo){
        var participante = deserializar();
        return participante.find(filtrarParticipante);

        function filtrarParticipante(dadosParticipante){
            return dadosParticipante[key] === atributo;
        }
    }

    function editar(key, array){
        var novoArray = deserializar();
		var indiceObjeto = novoArray.findIndex(localizarObjeto);

        function localizarObjeto(objeto){
            return objeto[key] === array[key];
        }
        
		novoArray[indiceObjeto] = array;
		serializar(novoArray);
    }

    function remover(key, atributo){
		var novoArray = deserializar();
		novoArray.splice(novoArray.findIndex( removerObjeto, 1 ));

        function removerObjeto(objeto){
            return objeto[key] === atributo;
        }
        
		serializar(novoArray);
	}

    function deserializar(){
        return JSON.parse (window.localStorage.getItem(key));
    }

    function serializar(array){
        window.localStorage.setItem(key, JSON.stringify(array));
    }

    return {
        adicionar,
        obterTodosParticipantes,
        buscarParticipante,
        editar,
        remover
    }
};