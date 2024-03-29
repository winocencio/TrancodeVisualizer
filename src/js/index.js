let SELECT_ELEMENT = buildSelect(BOOK_ARRAY);
let TEXTAREA_ELEMENT = document.querySelector('.trancodeTextarea');
let TABLE_LOCAL_ELEMENT = document.querySelector('.tableLocation');

let criarElemento = (queryClass,element) => {
    document.querySelector('.'+queryClass).appendChild(element);
};

let adicionarEvento = (event,element,action) => {
    element.addEventListener(event, action);
    element.dispatchEvent(new CustomEvent(event));
}


let acaoBotaoTransformar = (event) => {
    TABLE_LOCAL_ELEMENT.innerHTML = "";
    let book = JSON.parse(SELECT_ELEMENT.value);
    let trancodeInJson = convertTrancodeInJson(TEXTAREA_ELEMENT.value,book)
    console.log(trancodeInJson);
    startBuildTables(trancodeInJson.trancodeAtributeList);
}

window.addEventListener("load", (event) => {
    criarElemento('selectLocation',SELECT_ELEMENT);
    adicionarEvento('change',SELECT_ELEMENT,acaoSelect);

    adicionarEvento('click',document.querySelector('.transformarBotao'),acaoBotaoTransformar)


    //criarElemento('.tableLocation',getSelect(BOOK_ARRAY))
});