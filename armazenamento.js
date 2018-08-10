function Armazenamento(identificador){

    if(localStorage.getItem(identificador) === null)
        localStorage.setItem(identificador, "[]");

    function adicionar(participante){
        
        var conjuntoParticipantes = deserializar();
        conjuntoParticipantes.push(participante);
        serializar(conjuntoParticipantes);
        
    }

    function buscarParticipante(email){
        var participante = deserializar();
        return participante.reduce(filtrarParticipante, 0);

        function filtrarParticipante(dadosParticipante, indice){
            return dadosParticipante[indice].email === email;
        }
    }

    function deserializar(){
        return JSON.parse (localStorage.getItem(identificador));
    }

    function serializar(participante){
        localStorage.setItem(identificador, JSON.stringify(participante));
    }

    return {
        adicionar,
        buscarParticipante
    }
};