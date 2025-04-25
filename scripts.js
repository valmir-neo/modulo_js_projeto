
/*CODIGO P/ MODIFICAR PRIMEIRO SELECT*/ 
const currencySelect1 = document.querySelector(".currency-select1")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")


currencySelect1.addEventListener("change", changeCurrency1 )


function changeCurrency1 () {
    const currencyName1 = document.querySelector("#currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")
    

    if (currencySelect1.value == "dolar1") {
        currencyName1.innerHTML = "Dolar Americano"
        currencyImage1.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = "US$ 0,00"
    }

    if (currencySelect1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = "0,00 €"
    }

    if (currencySelect1.value == "libra1") {
        currencyName1.innerHTML = "Libra Esterlina"
        currencyImage1.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = "£ 0,00"
    }

    if (currencySelect1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImage1.src = "./assets/bitcoin.png"
        currencyValueToConvert.innerHTML = "₿ 0,00"
    }

    if (currencySelect1.value == "real1") {
        currencyName1.innerHTML = "Real"
        currencyImage1.src = "./assets/real.png"
        currencyValueToConvert.innerHTML = "R$ 0,00"
    }

}