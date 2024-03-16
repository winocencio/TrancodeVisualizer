let getTable = (adicionalClass) => {
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
    cellElement.dataset.key = objValue.key;
    cellElement.dataset.custom = objValue.custom;
    return cellElement;
}

let getTableValueRow = (objValueArray) => {
    let rowElement = document.createElement("tr");
    objValueArray.forEach(objValue => {
        rowElement.appendChild(getCellElement(objValue));
    });
    return rowElement;
}

let table = getTable("");
table.appendChild(getTableHeaderRow(["#1","codigo","nome"]));
table.appendChild(getTableValueRow(["#1","codigo","nome"]));

let table2 = getTable("");
table2.appendChild(getTableHeaderRow(["#1","codigo","nome"]));
table2.appendChild(getTableValueRow(["#1","codigo","nome"]));

console.log(table);
document.querySelector('.tableLocation').appendChild(table);
document.querySelector('.tableLocation').appendChild(table2);