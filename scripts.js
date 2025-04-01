const convertButton = document.querySelector(".convert-button")    //- 1. Passo: criar uma Variável("const") para o botão "<button>" que irá fazer a conversão
//- 2. conferir p ver se está funcionando ---  console.log(convertButton)
convertButton.addEventListener("click", convertvalues) // - 3. Pegar a variável criada anteriormente e adicionar um Atributo "ouvinte"(addEvent...) para o evento 
// "click" do meu botão, junto com a função que e vou querer chamar, quando o botão for clicado.



// - FUNÇÃO P/ MODIFICAR O NOME E A IMAGEM DE CADA MOEDA, QUANDO O 
//SELECT É MODIFICADO(CHANGE)


// - OBS: Função de modificação do 1(primeiro) <Select>
const currencySelect1 = document.querySelector(".currency-select1")

currencySelect1.addEventListener("change", changeCurrency1)

function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")

    if (currencySelect1.value == "dolar1") {
        currencyName1.innerHTML = "Dolar Americano"
        currencyImage1.src = "./assets/dolar.png"
    }

    if (currencySelect1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "libra1") {
        currencyName1.innerHTML = "Libra Esterlina"
        currencyImage1.src = "./assets/libra.png"
    }

    if (currencySelect1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImage1.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == "real1") {
        currencyName1.innerHTML = "Real"
        currencyImage1.src = "./assets/real.png"
    }
}



//obs: Função de modificação do segundo(2) <select>

const currencySelect2 = document.querySelector(".currency-select2").value
currencySelect2.addEventListener("change", changeCurrency2)     // - 18.Pegar a variável criada quando o usuário seleciona no "<select>" uma moeda a ser convertida,
// adicionar um Atributo "ouvinte"(addEvent...) para o evento "change" do "select", junto com a
// função que e vou querer chamar, quando houver a modificação na "caixa" "<Select>" (changeCurrency)

function changeCurrency2() {
    const currencySelect2 = document.querySelector(".currency-select2")
    const currencyName2 = document.getElementById("currency-name2") // - 19. Mapear o paragrafo do nome e a imagem, da moeda convertida, primeiramente, criando
    const currencyImage2 = document.querySelector(".currency-img2")  //uma classe ou Id dos dois, no HTML, e em seguida criar variáveis p as duas aqui.

    if (currencySelect2.value == "dolar2"); {                 // - 20. Criar a função "If" colocando entre() o atributo selecionado, nesse caso, o valor da 
        currencyName2.innerHTML = "Dolar Americano"         //variável da moeda escolhida pelo usuario no "select", comparada pelo parametro de igualdade
        currencyImage2.src = "./assets/dolar.png"             //com a moeda que o osuario selecionou, e em seguida, entre{}, inserir a ação a ser executada
    }                                                          //pela função If, caso seja verdadeira, nesse caso, inserir as variaveis mapeadas anteriormente,         
    //a serem modificadas, junto com os atributos ".innerHTML" para modificar o texto, e ".src"  
    if (currencySelect2.value == "euro2") {                           //para modificar a imagem, bem como indicar qual será o novo texto e imagem que irá aparecer.
        currencyName2.innerHTML = "Euro"
        currencyImage2.src = "./assets/euro.png"
    }

    if (currencySelect2.value == "libra2") {
        currencyName2.innerHTML = "Libra Esterlina"
        currencyImage2.src = "./assets/libra.png"
    }

    if (currencySelect2.value == "bitcoin2") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImage2.src = "./assets/bitcoin.png"
    }
    if (currencySelect2.value == "real2") {
        currencyName2.innerHTML = "Real"
        currencyImage2.src = "./assets/real.png"
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

