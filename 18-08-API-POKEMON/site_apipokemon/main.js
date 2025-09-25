// Variaveis globais 
//json.parse(localStorege) pega as variaveis que estão no local storege
//e as converte para  um array ou objeto
let treinadores = JSON.parse(localStorage.getItem("treinadores"))||[];
let historicoBatalhas = JSON.parse(localStorage.getItem("historicoBatalhas"))||[];
//inicialização dos pokemons em null == 0 
let pokemon1Selecionado = null;
let pokemon2Selecionado = null;


// Funcoes dos treinadores 

// Cadastrar novo treinador
function cadastrarTreinador(){
    let nome = document.getElementById("nomeTreinador").value;
    let idade = document.getElementById("idadeTreinador").value;
    let cidade = document.getElementById("cidadeTreinador").value;
//ferifica se os campos estão preenchidos
    if(!nome||!idade||!cidade){ 
        alert("Preencha todos os campos!"); 
        return; 
    }

    //ega os valores da variavel treinador 
    treinadores.push(new Treinador(nome,idade,cidade));
    //os puxa na as variacveis presentes no locaStorage
    localStorage.setItem("treinadores",JSON.stringify(treinadores));

    //pega as variaveis e as atribui valor
    document.getElementById("nomeTreinador").value="";
    document.getElementById("idadeTreinador").value="";
    document.getElementById("cidadeTreinador").value="";

    renderizarTreinadores();
    atualizarSelects();
}

// Renderiza a lista de treinadores na tela
function renderizarTreinadores(){
    let div = document.getElementById("listaTreinadores");
    div.innerHTML="";
    treinadores.forEach((t,i)=>{
        div.innerHTML+=`<div class="list-item">${t.nome} (${t.idade}) - ${t.cidade} 
        <button onclick="deletarTreinador(${i})">Deletar</button>
        <button onclick="editarTreinador(${i})">Editar</button></div>`;
    });
}

// Deletar treinador
function deletarTreinador(i){
    treinadores.splice(i,1);
    localStorage.setItem("treinadores",JSON.stringify(treinadores));
    renderizarTreinadores();
    atualizarSelects();
}

// Editar treinador
function editarTreinador(i){
    let t = treinadores[i];
    let novoNome = prompt("Novo nome:", t.nome);
    let novaIdade = prompt("Nova idade:", t.idade);
    let novaCidade = prompt("Nova cidade:", t.cidade);
    if(novoNome && novaIdade && novaCidade){
        t.nome = novoNome; t.idade=novaIdade; t.cidade=novaCidade;
        localStorage.setItem("treinadores",JSON.stringify(treinadores));
        renderizarTreinadores();
        atualizarSelects();
    }
}

// Atualiza os selects de escolha de treinador na batalha
function atualizarSelects(){
    let s1=document.getElementById("treinador1");
    let s2=document.getElementById("treinador2");
    s1.innerHTML=s2.innerHTML="";
    treinadores.forEach((t,i)=>{
        s1.innerHTML+=`<option value="${i}">${t.nome}</option>`;
        s2.innerHTML+=`<option value="${i}">${t.nome}</option>`;
    });
}

// Codigo Abaixo é p codigo de batalha 

// Inicia batalha entre os dois Pokémons selecionados
async function iniciarBatalha(){
    //verifiva se os pokemons são diferetes ou iguais
    if(!pokemon1Selecionado || !pokemon2Selecionado) return alert("Selecione os dois Pokémons");

    //vida do pokemon 1 e do pokemon 2
    let vida1 = pokemon1Selecionado.vida;
    let vida2 = pokemon2Selecionado.vida;
    //turnos
    let turno = 1;

    // laça um aviso de qual pokemon ta batendo em qual pokemon 
    let Notificacao="";
    document.getElementById("logBatalha").innerHTML="";

    //verifica se a vida dos pokemons é maior que zero
    while(vida1>0 && vida2>0){

        
        let dano;
        if(turno%2!==0){
            dano = Math.max(1,pokemon1Selecionado.ataque-pokemon2Selecionado.defesa);
            vida2-=dano; if(vida2<0) vida2=0;
            Notificacao+=`<p>${pokemon1Selecionado.nome} atacou ${pokemon2Selecionado.nome} causando ${dano}</p>`;
        } else {
            dano = Math.max(1,pokemon2Selecionado.ataque-pokemon1Selecionado.defesa);
            vida1-=dano; if(vida1<0) vida1=0;
            Notificacao+=`<p>${pokemon2Selecionado.nome} atacou ${pokemon1Selecionado.nome} causando ${dano}</p>`;
        }

        //barra de vida do pokemon 1 e do pokemon dois
        document.getElementById("vida1").style.width=`${(vida1/pokemon1Selecionado.vida)*100}%`;
        document.getElementById("vida2").style.width=`${(vida2/pokemon2Selecionado.vida)*100}%`;
        //mostra na tela quem atacou
        document.getElementById("logBatalha").innerHTML=log;
        //adiciona mais um turno a variavel
        turno++;
    }

    //seleciona o vencedor
    let vencedor = vida1>0?pokemon1Selecionado.nome:pokemon2Selecionado.nome;
    document.getElementById("vencedor").innerHTML=`<h2>Vencedor: ${vencedor}</h2>`;

    historicoBatalhas.push({
        pokemon1: pokemon1Selecionado.nome,
        pokemon2: pokemon2Selecionado.nome,
        vencedor: vencedor,
        rodadas: turno-1,
        //pega a data 
        data: new Date().toLocaleString()
    });
    //pega a data da memoria do navegador
    localStorage.setItem("historicoBatalhas",JSON.stringify(historicoBatalhas));
    atualizarHistorico();
}

// Reseta a batalha
function resetarBatalha(){
    pokemon1Selecionado=null; pokemon2Selecionado=null;
    document.getElementById("sprite1").src=""; document.getElementById("sprite2").src="";
    document.getElementById("vida1").style.width="0%"; document.getElementById("vida2").style.width="0%";
    document.getElementById("logBatalha").innerHTML=""; document.getElementById("vencedor").innerHTML="";
}

// Historico de batalhas 

function atualizarHistorico(){
    //uma div aonde vai mostrando quem ganhou de quem quem vs quem, rodadas feitas e datas
    let div = document.getElementById("historicoBatalhas");
    div.innerHTML="";
    historicoBatalhas.forEach(h=>{
        div.innerHTML+=`<div class="list-item">${h.pokemon1} vs ${h.pokemon2} - Vencedor: ${h.vencedor} (Rodadas: ${h.rodadas}, Data: ${h.data})</div>`;
    });
}

//Ativações das funções 
renderizarTreinadores();
atualizarSelects();
atualizarHistorico();
