const convertButton = document.querySelector(".convert-button")    //- 1. Passo: criar uma Variável("const") para o botão "<button>" que irá fazer a conversão
                                                                //- 2. conferir p ver se está funcionando ---  console.log(convertButton)
convertButton.addEventListener("click", convertvalues) // - 3. Pegar a variável criada anteriormente e adicionar um Atributo "ouvinte"(addEvent...) para o evento 
                                                            // "click" do meu botão, junto com a função que e vou querer chamar, quando o botão for clicado.
                                                                 
function convertvalues() {          // - 4. Criar a Função que será chamada assim que o evento "click" ocorrer, no caso, quando o usuário clicar no Botão.                
                                    // - 5. conferir p ver se está funcionando --- console.log("funcionou")

    const inputCurrencyValue = document.querySelector(".input-currency").value     // - 6. criar uma função para pegar o valor do input
                                                                        // - 7. conferir p ver se está funcionando --- console.log(inputCurrencyValue)   

    const dolarToday = 5.75        // - 8. Passo: criar uma função com a cotação do moeda a ser convertida (posteriormente, com as moedas)
    const euroToday = 6.35
    const libraToday = 7.5177
    const bitcoinToday = 485963
    
    // const convertedValue = inputCurrencyValue / dolarToday  - 9. criar uma função para pegar o valor obtido no input e dividir pela função da cotação. 
                                                            // - 10. Passo: conferir p ver se está funcionando --- console.log(convertedValue)          

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // - 11. Mapear(criar variável) o paragrafo"<p>" que irá receber o 
                                                                                        // valor que o usuário colocará no input: Primeiro criar uma "class" p ele no HTML.
    const currencyValueConverted = document.querySelector(".currency-value-converted") // - 12. Mapear(criar variável) o paragrafo"<p>" que irá receber o 
                                                                                       // valor convertido: Primeiro criar uma "class" p ele no HTML.

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {   // - 13. Criar variável(com ajuda de uma tag q formata valores monetários), para que o 
        style: "currency",                                                  // valor inserido no input, apareça no paragrafo em valores monetarios, no caso, 
        currency: "BRL"                                                       // o real Brasileiro.
    }).format(inputCurrencyValue)

    //const currencySelect = document.querySelector(".currency-select")    - 14. Mapear o "<select>" que está recebendo as opções de moedas a 
                                                                          // serem convertidas, primeiramente criando uma "class" p ele no HTML, e depois 
                                                                            // criando uma variável no JS. <<<TEM Q ESTAR FORA DA FUNÇÃO>>>

    if (currencySelect.value == "dolar") {                               // - 15. Criar a Função "If", junto com a variável a qual ela está se referindo, 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  // nesse caso, "(currencySelect.value)" que está indicando o valor da variável criada
            style: "currency",                                                  //anteriormente para mapear a moeda selecionada no "<select>" a ser convertida.
            currency: "USD"                                    // - 16. Depois, indicar entre() qual parametro (maior, menor ou igual que) e a que ele está se                                               
        }).format(inputCurrencyValue / dolarToday)               //referindo, nesse caso, ao atributo "value" da tag "<option>", inserida no "<select>" da moeda
    }                                                              // a ser convertida, no HTML, no caso ao lado, se for selecionado "dolar". E em seguida 
                                                                     // indicar a ação que a função "If" executará, entre{},no caso, modificar o "<p>" da moeda
    if (currencySelect.value == "euro") {                              // convertida(currencyValueConverted.innerHTML) e em seguida pegando o valor inserido pelo 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {  //usuário no input e executar os calculos da conversão. (inputCurrencyValue / dolarToday) 
            style: "currency", 
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)                   // - 17. Repete o "Passo 16" para as outras moedas
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", 
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

}

const currencySelect = document.querySelector(".currency-select")

currencySelect.addEventListener("change", changeCurrency )     // - 18.Pegar a variável criada quando o usuário seleciona no "<select>" uma moeda a ser convertida,
                                                                // adicionar um Atributo "ouvinte"(addEvent...) para o evento "change" do "select", junto com a
                                                                 // função que e vou querer chamar, quando houver a modificação na "caixa" "<Select>" (changeCurrency)

function changeCurrency(){
    const currencyName = document.getElementById("currency-name") // - 19. Mapear o paragrafo do nome e a imagem, da moeda convertida, primeiramente, criando
    const currencyImage = document.querySelector(".currency-img")  //uma classe ou Id dos dois, no HTML, e em seguida criar variáveis p as duas aqui.

    if (currencySelect.value == "dolar"){                 // - 20. Criar a função "If" colocando entre() o atributo selecionado, nesse caso, o valor da 
        currencyName.innerHTML = "Dolar Americano"         //variável da moeda escolhida pelo usuario no "select", comparada pelo parametro de igualdade
        currencyImage.src = "./assets/dolar.png"             //com a moeda que o osuario selecionou, e em seguida, entre{}, inserir a ação a ser executada
    }                                                          //pela função If, caso seja verdadeira, nesse caso, inserir as variaveis mapeadas anteriormente,         
                                                                 //a serem modificadas, junto com os atributos ".innerHTML" para modificar o texto, e ".src"  
    if (currencySelect.value == "euro"){                           //para modificar a imagem, bem como indicar qual será o novo texto e imagem que irá aparecer.
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
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

