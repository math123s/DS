//Criacao da classe veiculo
class Veiculo{

//criacao do valor modelo
 set modelo(valor){
    this._modelo = valor
 }
    //retarn do modelo
    get modelo(){
        return this._modelo
    }
//criacao do valor da marca
 set marca(valor){
       this._marca = valor
 }
    //verifica e retorna o valor da marca
    get marca(){
         return this._marca
    } 
//criacao do valor do ano do veiculo
set ano(valor){
     this._ano = valor
}
    //retorna o valor do ano do veiculo
    get ano(){
         return this._ano
    } 

    //funcao que mostra a marca, modelo, ano e numero de portas 
    informacoes() {
       return "Marca: "+this.modelo+"Modelo: "+this.marca+"ano: "+this.ano+"Numero de portas: "+this.portas
    }
       
    
    //funcao que liga o veiculo
    ligar(){
        console.log("Seu carro foi ligado");
    }
}