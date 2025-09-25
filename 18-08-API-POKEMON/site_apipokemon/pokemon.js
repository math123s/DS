// Classes 

// Classe Treinador
class Treinador {
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.pokemons = []; // Pokémons do treinador
    }
}

// Classe Pokémon
class Pokemon {
    constructor(nome, vida, ataque, defesa, sprite){
        this.nome = nome;
        this.vida = vida;       // HP total
        this.ataque = ataque;   // ataque base
        this.defesa = defesa;   // defesa base
        this.sprite = sprite;   // imagem
    }
}

//Funções do pokemon

// Busca Pokémon na API do PokéAPI
async function buscarPokemon(nome){
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
        if(!res.ok) return new Error("Pokémon não encontrado");
        let d = await res.json();
        // Retorna um dos objetos Pokémon com atributos seus atributos 
        return new Pokemon(d.name, d.stats[0].base_stat, d.stats[1].base_stat, d.stats[2].base_stat, d.sprites.front_default);
    }catch(e){ 
        alert(e.message); 
    }
}

// Seleciona Pokémon 1
  function selecionarPokemon1(){
    let nome = document.getElementById("pokemon1").value;
    if(!nome) return alert("Digite o Pokémon 1");
    pokemon1Selecionado = await buscarPokemon(nome);
    document.getElementById("sprite1").src=pokemon1Selecionado.sprite;
    document.getElementById("vida1").style.width="100%";
}

// Seleciona Pokémon 2
 function selecionarPokemon2(){
    let nome = document.getElementById("pokemon2").value;
    if(!nome) return alert("Digite o Pokémon 2");
    pokemon2Selecionado = await buscarPokemon(nome);
    document.getElementById("sprite2").src=pokemon2Selecionado.sprite;
    document.getElementById("vida2").style.width="100%";
}
