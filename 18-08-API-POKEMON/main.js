function buscarPokemon(){
    let pkm_name = document.querySelector("#pkm_name").value;

    
fetch(`https://pokeapi.co/api/v2/pokemon/ditto/${pkm_name}`)
    .then(resposta => {
        if(!resposta.ok){
        throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
        })
        .then(dados => {
            const  p = new Pokemon();
            p.nome = dados.name;
            p.tipo = dados.types.map(t=> t.type.name);
            p.peso = dados.weight;
            p.sprite = dados.sprites.front_default;
            // console.log(p.exibirDados());

            document.getElementById("resultado").innerHMTL = 
            `<h1>${p.nome}</h1> 
            <li>Tipo:${p.tipo} </li>
            <li>Peso:${p.peso} </li>
            </ul>
            <img src="${p.sprite}>`

        })
        .catch(erro => {
            alert(erro.message);
        })
}