const convertButton = document.querySelector(".convert-button")    //- 1. Passo: criar uma Variável("const") para o botão "<button>" que irá fazer a conversão
//- 2. conferir p ver se está funcionando ---  console.log(convertButton)
convertButton.addEventListener("click", convertvalues) // - 3. Pegar a variável criada anteriormente e adicionar um Atributo "ouvinte"(addEvent...) para o evento 
// "click" do meu botão, junto com a função que e vou querer chamar, quando o botão for clicado.

function convertvalues() {          // - 4. Criar a Função que será chamada assim que o evento "click" ocorrer, no caso, quando o usuário clicar no Botão.                
    // - 5. conferir p ver se está funcionando --- console.log("funcionou")

    If(currencySelect1.value == "real1");{

        const inputCurrencyValue = document.querySelector(".input-currency").value;


        const dolarToday = 5.75
        const euroToday = 6.35
        const libraToday = 7.5177
        const bitcoinToday = 485963


        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value-converted")


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputCurrencyValue)
    

        if (currencySelect2.value == "dolar2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", 
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if (currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect2.value == "bitcoin2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
        }

    }
}

    If(currencySelect1.value == "dolar1");{

        const inputCurrencyValue = document.querySelector(".input-currency").value


        const realToday = 0.17
        const euroToday = 0.93
        const libraToday = 0.77
        const bitcoinToday = 86700


        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value-converted")

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)

        if (currencySelect2.value == "real2") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }
        if (currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if (currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect2.value == "bitcoin2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
        }

    }


    If(currencySelect1.value == "euro1");{

        const inputCurrencyValue = document.querySelector(".input-currency").value


        const realToday = 0.16
        const dolarToday = 0.93
        const libraToday = 1.20
        const bitcoinToday = 80235


        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value-converted")


        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        if (currencySelect2.value == "real2") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }
        if (currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect2.value == "bitcoin2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
        }

    }



    If(currencySelect1.value == "libra1");{

        const inputCurrencyValue = document.querySelector(".input-currency").value


        const realToday = 0.13
        const dolarToday = 0.77
        const euroToday = 0.84
        const bitcoinToday = 67073


        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value-converted")

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        if (currencySelect2.value == "real2") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }
        if (currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if (currencySelect2.value == "bitcoin2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
        }

    }



    If(currencySelect1.value == "bitcoin1");{

        const inputCurrencyValue = document.querySelector(".input-currency").value


        const realToday = 0.00000197
        const dolarToday = 0.0000115
        const euroToday = 0.0000124
        const libraToday = 0.0000149


        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value-converted")

          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
    }).format(inputCurrencyValue)

    if (currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    if (currencySelect2.value == "dolar2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect2.value == "euro2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect2.value == "libra2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    }


// - FUNÇÃO P/ MODIFICAR O NOME E A IMAGEM DE CADA MOEDA, QUANDO O 
//SELECT É MODIFICADO(CHANGE)


// - OBS: Função de modificação do 1(primeiro) <Select>
const currencySelect1 = document.querySelector(".currency-select1")

currencySelect1.addEventListener("change", changeCurrency1)

function changeCurrency1() {
    const currencyName = document.getElementById("currency-name1")

    const currencyImage = document.querySelector(".currency-img1")

    if (currencySelect1.value == "dolar1") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect1.value == "euro1") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "libra1") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect1.value == "bitcoin1") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == "real1") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
}



//obs: Função de modificação do segundo(2) <select>
const currencySelect2 = document.querySelector(".currency-select2")

currencySelect2.addEventListener("change", changeCurrency2)     // - 18.Pegar a variável criada quando o usuário seleciona no "<select>" uma moeda a ser convertida,
// adicionar um Atributo "ouvinte"(addEvent...) para o evento "change" do "select", junto com a
// função que e vou querer chamar, quando houver a modificação na "caixa" "<Select>" (changeCurrency)

function changeCurrency2() {
    const currencyName = document.getElementById("currency-name2") // - 19. Mapear o paragrafo do nome e a imagem, da moeda convertida, primeiramente, criando
    const currencyImage = document.querySelector(".currency-img2")  //uma classe ou Id dos dois, no HTML, e em seguida criar variáveis p as duas aqui.

    if (currencySelect2.value == "dolar2") {                 // - 20. Criar a função "If" colocando entre() o atributo selecionado, nesse caso, o valor da 
        currencyName.innerHTML = "Dolar Americano"         //variável da moeda escolhida pelo usuario no "select", comparada pelo parametro de igualdade
        currencyImage.src = "./assets/dolar.png"             //com a moeda que o osuario selecionou, e em seguida, entre{}, inserir a ação a ser executada
    }                                                          //pela função If, caso seja verdadeira, nesse caso, inserir as variaveis mapeadas anteriormente,         
    //a serem modificadas, junto com os atributos ".innerHTML" para modificar o texto, e ".src"  
    if (currencySelect2.value == "euro2") {                           //para modificar a imagem, bem como indicar qual será o novo texto e imagem que irá aparecer.
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect2.value == "libra2") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect2.value == "bitcoin2") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect2.value == "real2") {
        x
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    convertvalues()
}


/*
    - DESAFIO - ADICIONAR NOVAS MOEDAS
 

    1. Adicionar o nome e simbolo das outras moedas na tag "select" do
 HTML, com os respectivos atributos "value" de cada um.
    2. Criar variáveiss para as cotações.
    3. Adicionar as variaveis "If" de cada nova moeda, tanto para modificar
o paragrafo com o nome da moeda selecionada, quanto a bandeira de cada
moeda, cada vez que o select for modificado.

*/

