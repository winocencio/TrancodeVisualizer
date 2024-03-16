let buildSelect = (bookArray,adicionalClass = "") => {
    let selectElement = document.createElement("select");
    selectElement.setAttribute('class', `rwd-select ${adicionalClass}`);

    bookArray.forEach((book)=> {
        let option = document.createElement("option");
        option.value = book.value
        option.appendChild(document.createTextNode(book.name));
        selectElement.appendChild(option);
    });
    return selectElement;
}


let acaoSelect = (event) => {
    let book = JSON.parse(event.target.value);
    let exampleTextElement = document.querySelector('.example');

    exampleTextElement.innerHTML =(book.examples[0]);
}