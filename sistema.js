//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */
function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    const armazenamento = new Armazenamento("participantes");

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        //implemente o código necessário
        if (obterParticipante(email) === undefined){
            var p = new Participante();
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;

            armazenamento.adicionar(p);
        }
        else
            throw ("Este email já existe: " + email);
    }

    //--------> implementar funções abaixo para usar armazenamento

    function removerParticipante(email) {
        //implemente o código necessário                                
        function filtrarPorEmail(dadosParticipante){
            return dadosParticipante.email === email;
        }

        return participantes.splice( participantes.findIndex( filtrarPorEmail ), 1);
    }

    function buscarParticipantesPorNome(nome){
        //implemente o código necessário                                --> ok
        return armazenamento.buscarParticipante("nome", nome);       
    }    

    function buscarParticipantesPorSexo(sexo){
        //implemente o código necessário                                --> ok
        return armazenamento.buscarParticipante("sexo", sexo); 
    }

    function buscarParticipantesAprovados(){
        //implemente o código necessário                                --> ok
        return armazenamento.buscarParticipante("aprovado", true); 
    }       

    function buscarParticipantesReprovados(){
        //implemente o código necessário                                --> ok
        return armazenamento.buscarParticipante("reprovado", false); 
    }

    function obterParticipante(email){
        //implemente o código necessário                                --> ok
        return armazenamento.buscarParticipante("email", email);
    }

    function adicionarNotaAoParticipante(email, nota){
        //implemente o código necessário                                --> ok
        var participante = obterParticipante(email);
		adicionarNota(participante, nota);
        armazenamento.editar("email", participante);      
    }

    function adicionarNota(participante, nota){                       //--> ok
        participante.nota = nota;
		participante.aprovado = participante.nota >= 70; 
    }

    function obterMediaDasNotasDosParticipantes(){
        //implemente o código necessário
        function calcularSomaParticipantes(somaDosParticipantes, dadosParticipante){
            return somaDosParticipantes + dadosParticipante.nota;
        }

        return participantes.reduce(calcularSomaParticipantes, 0) / participantes.length;
    }

    function obterTotalDeParticipantes(){
        return armazenamento.deserializar().length;                    //--> ok
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo){
        //implemente o código necessário
        function contarPorSexo(totalPorSexo, dadosParticipante){
            if(dadosParticipante.sexo === sexo)
                totalPorSexo += 1;               
            return totalPorSexo;
        }

        return participantes.reduce(contarPorSexo, 0);
    } 

    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo
    };
}