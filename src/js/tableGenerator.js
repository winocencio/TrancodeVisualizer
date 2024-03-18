let NUMERO_TABELA = 0;
let NUMERO_COLUNA = 0;

let buildTables = (lineAtributeList) => {
    let table;
        //table = buildTable(getHeaderArray(atributeList),atributeList);
    table = buildTable(getHeaderArray(lineAtributeList[0]),lineAtributeList);
    TABLE_LOCAL_ELEMENT.appendChild(table);
    
    lineAtributeList.forEach((lineAtribute)=>{
        let atributeWithKey = lineAtribute.filter(atribute => Object.values(atribute)[0].key);
        if(atributeWithKey){
            console.log(atributeWithKey);
            atributeWithKey.forEach(atribute => {
                buildTables(Object.values(atribute)[0].list);
            });
        }
    });
}

let buildTable = (headerArray,lineArray,adicionalClass) => {
    let tableElement = getTable(adicionalClass);

    let headerArrayTable = ["#"+NUMERO_TABELA];
    headerArrayTable = headerArrayTable.concat(headerArray);
    tableElement.appendChild(getTableHeaderRow(headerArrayTable));

    lineArray.forEach(objValueArray => {
        let objValueArrayTable = [{value : ""}];
        objValueArrayTable = objValueArrayTable.concat(getObjValueArray(objValueArray));
        tableElement.appendChild(getTableValueRow(objValueArrayTable));
    });


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