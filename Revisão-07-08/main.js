    const c = new Carro();
    

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


    function buttonInfo(){
        console.log(c.informacoes())
    }

    function buttonLigar(){
        console.log(c.ligar())
    }
 