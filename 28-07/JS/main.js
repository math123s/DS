//Criando uma instância/objeto da classe Cliente
//Herda todas as caractereristicas da classe Cliente
//e vai para uma constante C
const C = new Cliente("Gabriela","gabi@gmail.com", "2009-04-09");

//criando uma instancia/objeto da classe cliente  (o "C" PEGA TUDO QUE TIVER NO CLIENTE E ATRIBUI A ELE)

console.log(C)


const C2 = new Cliente ("José","jose@gmail.com","2006-03-02");
console.log(C2.exibir());

console.log(C2.calcular(10,20));

function inserir(){
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let dataNascimento = document.querySelector("#dataNascimeto").value;
    
    const c3 = new Cliente(nome,email,dataNascimento)
    documento.querySelector("#mensagem").innerHTML = c3.exibir();
}
