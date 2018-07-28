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
        for(let i = 0; i < participantes.length; i++){
            if (participantes[i].email === email){
                participantes.splice(i, 1);
            }
        }      
    }
    function buscarParticipantesPorNome(nome){
        //implemente o código necessário
        var listaParticipantesPorNome = [];
        for(let i = 0; i < participantes.length; i++){            
            if (participantes[i].nome === nome){
                listaParticipantesPorNome.push(participantes[i]);
            }
        }          
        return listaParticipantesPorNome;
    }    
    function buscarParticipantesPorSexo(sexo){
        //implemente o código necessário
        var listaParticipantesPorSexo = [];
        for(let i = 0; i < participantes.length; i++){ 
            if (participantes[i].sexo === sexo){                
                listaParticipantesPorSexo.push(participantes[i]); 
            }
        }  
        return listaParticipantesPorSexo;
    }
    function buscarParticipantesAprovados(){
        //implemente o código necessário
        var listaParticipantesAprovados = [];
        for(let i = 0; i < participantes.length; i++){
            if(verificarSeParticipanteEstaAprovado(participantes[i].email) == true){
                listaParticipantesAprovados.push(participantes[i]);
            }          
        }        
        return listaParticipantesAprovados;
    }
    function buscarParticipantesReprovados(){
        //implemente o código necessário
        var listaParticipantesReprovados = [];  
        for(let i = 0; i < participantes.length; i++){
            if(verificarSeParticipanteEstaAprovado(participantes[i].email) == false){
                listaParticipantesReprovados.push(participantes[i]);
            }          
        }        
        return listaParticipantesReprovados;     
    }
    function obterParticipante(email){
        //implemente o código necessário
        for(let i = 0; i < participantes.length; i++){
            if (participantes[i].email === email){
                return participantes[i];
            }
        }
    }
    function adicionarNotaAoParticipante(email, nota){
        //implemente o código necessário   
        for(let i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                participantes[i].nota = nota;
            }
        }
         
    }
    function obterMediaDasNotasDosParticipantes(){
        //implemente o código necessário
        var somaDosParticipantes = 0;
        var totalAlunosComNota = 0;
        for(let i = 0; i < participantes.length; i++){
                somaDosParticipantes += participantes[i].nota;
                totalAlunosComNota ++;
        }
        return somaDosParticipantes / totalAlunosComNota;

    }
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        //implemente o código necessário
        for(let i = 0; i < participantes.length; i++){
            if(participantes[i].email === email){
                if(participantes[i].nota >= 70)
                    return true;
                else 
                    return false;
            }
        }
    }
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        //implemente o código necessário
        var totalParticipantesPorSexo = 0;
        for(let i = 0; i < participantes.length; i++){            
            if (participantes[i].sexo === sexo){
                totalParticipantesPorSexo += 1;    
            }            
        }  
        return totalParticipantesPorSexo;
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