function buscarPokemon(){
    //nome da variavel que vai armazenar o pokemon
    let pkm_name = document.querySelector("#pkm_name").value;

//serve para realizar requisições HTTP assíncronas,
// permitindo que sua aplicação web busque recursos de um servidor ou de outras fontes externas
fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name}`)
    .then(resposta => {
        if(!resposta.ok){
        throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
        })
        //pega os dados do pokemon
        .then(dados => {
            const  p = new Pokemon();
            p.nome = dados.name;
            p.tipo = dados.types.map(t=> t.type.name);
            p.peso = dados.weight;
            p.sprite = dados.sprites.front_default;
            // console.log(p.exibirDados());

            //Resposta do servidor com nome,tipo, peso e foto/sprite
    document.getElementById("resultado").innerHTML = `<h1>${p.nome}</h1> 
           <p>Tipo:${p.tipo} </p>
            <p>Nome:${p.nome} </p>
            <p>Peso:${p.peso} kg </p>
            <img src="${p.sprite}">`;

        })
        //senão pegar o alerta de erro
        //se der erro exibe a mensagem de erro
        .catch(erro => {
            alert(erro.message);
        })
}

function buscarPokemon2(){
    //nome da variavel que vai armazenar o pokemon
    let pkm_name2 = document.querySelector("#pkm_name2").value;

//serve para realizar requisições HTTP assíncronas,
// permitindo que sua aplicação web busque recursos de um servidor ou de outras fontes externas
fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta2 => {
        if(!resposta2.ok){
        throw new Error("Pokemon não encontrado");
        }
        return resposta2.json();
        })
        //pega os dados do pokemon
        .then(dados => {
            const  p2 = new Pokemon();
            p2.nome = dados.name;
            p2.tipo = dados.types.map(t=> t.type.name);
            p2.peso = dados.weight;
            p2.sprite = dados.sprites.front_default;
            // console.log(p.exibirDados());

            //Resposta do servidor com nome,tipo, peso e foto/sprite
    document.getElementById("resultado2").innerHTML = 
          `<h1>${p2.nome}</h1> 
           <p>Tipo:${p2.tipo} </p>
            <p>Nome:${p2.nome} </p>
            <p>Peso:${p2.peso} kg </p>
            <img src="${p2.sprite}">`;

        })
        //senão pegar o alerta de erro
        //se der erro exibe a mensagem de erro
        .catch(erro => {
            alert(erro.message);
        })
}