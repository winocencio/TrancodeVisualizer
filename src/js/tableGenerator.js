let NUMERO_TABELA = 0;

let buildTable = (headerArray,objValueArray,adicionalClass) => {

    let headerArrayTable = ["#"+NUMERO_TABELA];
    headerArrayTable = headerArrayTable.concat(headerArray);

    let objValueArrayTable = [{value : ""}];
    objValueArrayTable = objValueArrayTable.concat(objValueArray);

    let tableElement = getTable(adicionalClass);
    tableElement.appendChild(getTableHeaderRow(headerArrayTable));
    tableElement.appendChild(getTableValueRow(objValueArrayTable));
    return tableElement;
}

let getTable = (adicionalClass = "") => {
    let tableElement = document.createElement("table");
    tableElement.setAttribute('class', `rwd-table ${adicionalClass}`);
    return tableElement;
}

let getHeaderRowElement = (text) => {
    const cellElement = document.createElement("th");
    cellElement.appendChild(document.createTextNode(text));
    return cellElement;
}

let getTableHeaderRow = (headerArray) => {
    let rowElement = document.createElement("tr");
    headerArray.forEach(text => {
        rowElement.appendChild(getHeaderRowElement(text));
    });
    return rowElement;
}

let getCellElement = (objValue) => {
    const cellElement = document.createElement("td");
    cellElement.appendChild(document.createTextNode(objValue.value));
    //cellElement.dataset.key = objValue.key;
    cellElement.dataset.custom = JSON.stringify(objValue.custom);
    return cellElement;
}

let getTableValueRow = (objValueArray) => {
    let rowElement = document.createElement("tr");
    objValueArray.forEach(objValue => {
        rowElement.appendChild(getCellElement(objValue));
    });
    return rowElement;
}