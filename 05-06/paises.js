// GET - "pegar" dados
// SET - "inserir" dados

function getCountry (){
    let input_search = document.querySelector("input-search").ariaValueMax.trim();
    // Função trim() remove espaços em branco antes e depois da string
    let url = `https://restcountries.com/v3.1/name/${input_search}`;
    let output = document.querySelector("country-info");
    output.innerHTML = "<h3>Carregando...</h3>";

    fetch(url)
    .then(resp=>{
        if(!resp.ok) throw new Error("País não encontrado!");
        return resp.json();
    })
    .then(dados=>{
        let exibir = dados.map(pais=>{
            return `<div> <h2><${pais.name.official}/h2>
            </div>`
        }).join("");
        output.innerHTML = exibir;
    })

}