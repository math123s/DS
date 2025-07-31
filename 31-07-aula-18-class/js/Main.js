// instância da classe 
// Objeto



function cadastrar(){
    let nome = document.querySelector("#nome").value;
    let marca = document.querySelector("#marca").value;
    let cor= document.querySelector("#cor").value;

    const p = new Produto(nome,marca,cor);
    alert(p.exibir());
}