// selecionar o elemento
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const button = document.querySelector("#meuBotao");
const messageElement = document.querySelector("#message");

// função para converter 

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "Você precisa converter dados diferentes!";
        return;
    }

    // converter a entrada para metros
    
    let meters 
    switch (fromValue) {
        case "m":
            meters = inputElement.value
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
    }

    // converter metros para a saída
    let result;
    switch (toValue) {
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
    }
        //exibir o resultado no input
        outputElement.value = result;

        //exibir resultado na mensagem

    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} é igual a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;
}

meuBotao.addEventListener("click", convert);
// adicionar evento de click ao botão   

