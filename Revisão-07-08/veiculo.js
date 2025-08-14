class Veiculo{
   
 set modelo(valor){
    this._modelo = valor
 }

    get modelo(){
        return this._modelo
    }

 set marca(valor){
       this._marca = valor
 }
    
    get marca(){
         return this._marca
    } 

set ano(valor){
     this._ano = valor
}
     
    get ano(){
         return this._ano
    } 

    informacoes() {
       return "Marca: "+this.modelo+"Modelo: "+this.marca+"ano: "+this.ano+"Numero de portas: "+this.portas
    }
       
    

    ligar(){
        console.log("Seu carro foi ligado");
    }
}