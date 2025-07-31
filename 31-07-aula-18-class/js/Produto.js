class Produto{
    // Construtor é um método de requisitos
    constructor(nome,marca,cor){
    //O referencia dentro da propria classe
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    //this é  uma forma de apontar algum atributo dentro da  própria classe 
    }
    exibir(){
        return `${this.nome} - ${this.marca} - ${this.cor} `;
    }
}