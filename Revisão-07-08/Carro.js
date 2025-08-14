class Carro  extends Veiculo{
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