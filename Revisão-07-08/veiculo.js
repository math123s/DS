class Veiculo{
   
 set _modelo(_modelo){
    this._modelo = valor
 }

    get _modelo(){
        return this._modelo
    }

 set _marca(_marca){
       this._marca = valor
 }
    
    get _marca(){
         return this._marca
    } 

set _ano(_ano){
     this._ano = valor
}
     
    get _ano(){
         return this._ano
    } 

set _portas(_portas){
        this._portas = valor
}
    get _portas(){
        return this._portas
    }

    _informacoes() {
        console.log("Marca: "+this._modelo)
        console.log("ModelO: "+this._marca)
        console.log("ano: "+this._ano)
        console.log("Numero de portas: "+this._portas)
    }

    abrirPortas(){
        _informacoes()
        "<br>"
        _ligar()
        "<br>"

    }

    _ligar(){
        console.log(this.veiculo+"Foi ligado")
    }
}