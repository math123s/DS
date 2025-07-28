//Classe define a estrutura do nosso projeto
//dentro da classe iremos definir as caracteristicas / atributos
//primeira letra em maiusculo e do aquivo JS tbm com a primeira letra em Maiusculo
class Cliente{

//método/função construtor
//coloca as caracteristicas obrigatorias na chave do construtor e nas aspas
constructor(nome,email,dataNascimento)
{
//como declarar variaveis dentro de classes
 this.nome = nome;
 //this referencia a informação para a propria classe 
 this.email = email;
 this.dataNascimento = dataNascimento;
}
//ou
//let nome
    exibir(){
        return `Nome: ${this.name}, E-mail: ${this.email},Data de Nascimento: ${this.dataNascimento}`;
    }

    calcular(qtd, valor){
        return qtd*valor;
    }
}
