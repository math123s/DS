class Carro  extends Veiculo{
   //classe que faz com que as portas fiquem abertas
    set portas(valor){
        this._portas = valor
     }
    
        get portas(){
            return this._portas
        }

        abrirPortas(){
            return "Portas abertas";
        }
}