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
            <img src="${p.sprite}>`;

        })
        //senão pegar o alerta de erro
        //se der erro exibe a mensagem de erro
        .catch(erro => {
            alert(erro.message);
        })
}