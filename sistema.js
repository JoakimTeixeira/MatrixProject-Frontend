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
    var participantes = [];

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        //implemente o código necessário
        if (obterParticipante(email) === undefined){
            var p = new Participante();
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;

            participantes.push(p);
        }
        else
            throw ("Este email já existe: " + email);
    }

    function removerParticipante(email) {
        //implemente o código necessário
        function filtrarPorEmail(dadosParticipante){
            return dadosParticipante.email === email;
        }

        return participantes.splice( participantes.findIndex( filtrarPorEmail ), 1);
    }
    function buscarParticipantesPorNome(nome){
        //implemente o código necessário
        function filtrarPorNome(dadosParticipante){
            return dadosParticipante.nome === nome;
        }

        return participantes.filter(filtrarPorNome);        
    }    
    function buscarParticipantesPorSexo(sexo){
        //implemente o código necessário
        function filtrarPorSexo(dadosParticipante){
            return dadosParticipante.sexo === sexo;
        }

        return participantes.filter(filtrarPorSexo);        
    }
    function buscarParticipantesAprovados(){
        //implemente o código necessário
        function verificarAprovacao(dadosParticipante){
            return verificarSeParticipanteEstaAprovado(dadosParticipante.email) ? dadosParticipante : undefined;
        }

        return participantes.filter(verificarAprovacao);
    }       
    function buscarParticipantesReprovados(){
        //implemente o código necessário
        function filtrarReprovados(dadosParticipante){
            return dadosParticipante.aprovado === false;
        }

        return participantes.filter(filtrarReprovados);     
    }
    function obterParticipante(email){
        //implemente o código necessário
        function filtrarParticipante(dadosParticipante){
            return dadosParticipante.email === email;
        }

        return participantes.find(filtrarParticipante);
    }
    function adicionarNotaAoParticipante(email, nota){
        //implemente o código necessário   
        function adicionarNota(dadosParticipante){
            dadosParticipante.email === email ? dadosParticipante.nota = nota : undefined;
        }
        
        participantes.find(adicionarNota);      
    }
    function obterMediaDasNotasDosParticipantes(){
        //implemente o código necessário
        function calcularSomaParticipantes(somaDosParticipantes, dadosParticipante){
            return somaDosParticipantes + dadosParticipante.nota;
        }

        return participantes.reduce(calcularSomaParticipantes, 0) / participantes.length;
    }
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        //implemente o código necessário
        function verificarAprovacao(dadosParticipante){
            if(dadosParticipante.email === email){
                if(dadosParticipante.nota >= 70){
                    dadosParticipante.aprovado = true;
                    return true;
                }
                else{
                    dadosParticipante.aprovado = false;
                    return false;
                }
            }
        };

        return participantes.find(verificarAprovacao);
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
        obterQuantidadeDeParticipantesPorSexo,
        participantes
    };
}