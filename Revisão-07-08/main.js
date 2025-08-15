    const c = new Carro();
    //criação da classe C

    //Funcao que valida o modelo,marca, ano e numeros de portas
    function inserirIfo(){
        let infmo = document.querySelector("#modelo").value
        let infma = document.querySelector("#marca").value
        let infan = document.querySelector("#ano").value
        let infpo = document.querySelector("#portas").value

        c.ano = infan
        c.modelo = infmo
        c.marca = infma
        c.portas = infpo
    }

    //funcao do button que apresenta todas as informações do carro
    function buttonInfo(){
        console.log(c.informacoes())
    }

    //fucao de button que liga o carro 
    function buttonLigar(){
        console.log(c.ligar())
    }
 