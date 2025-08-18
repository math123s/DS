class Pokemon{
        // pegado os topicos do pokemon
    set nome(valor){
        this._nome = valor;
    }

    get nome(){
        return this._nome;
    }

    set tipo(valor){
        this._tipo = valor;

    }
    get tipo(){
        return this._tipo;
    }

    set peso(valor){
        this._peso = valor
    }
    get peso(){
        return this._peso;
    }

    set sprite(valor){
        this._sprite = valor;
    }

    get sprite(){
        return this._sprite;
    }

    //funcao que exibe os dados do pokemon
    exibirDados(){
        return `${this._nome} 
        - ${this._tipo} 
        - ${this._peso} 
        - ${this._sprite}`;

        
    }
}