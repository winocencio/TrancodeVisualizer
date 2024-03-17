let HEAD_TRANCODE = "";
let INICIO_CORTE = 0;
let FIM_CORTE = 0;

let compare = (a,b) => {
    if (a.position < b.position)
        return -1;
    if (a.position > b.position)
        return 1;
    return 0;
}

let sortBook = (book) => {
    book.sort(compare);

    book.forEach(obj => {
        if(!Object.hasOwn(obj, 'list'))
            return;
        
        sortBook(obj.list.src);
    });
}

let prepareAtributeListBook = (obj) => {
    obj.size = Object.values(obj.list.src).reduce((a, b) => a + b.size, 0) * obj.amount;
}

let prepareBook = (book) => {
    book.forEach(obj => {
        if(!Object.hasOwn(obj, 'list'))
            return;
        
        prepareAtributeListBook(obj);
        prepareBook(obj.list.src);
    });
}

let buildTrancodeAtribute = (objAtributeDetails,atributevalue) => {
    let trancodeAtribute = {};
    trancodeAtribute[objAtributeDetails.name] = {
        "value" : atributevalue,
        "custom" : objAtributeDetails.object
    };
    return trancodeAtribute;
}

let convertTrancodeInJson = (trancode, bookDefinition) => {
    let objReturn = {};
    objReturn.trancodeAtributeList = [];
    HEAD_TRANCODE = trancode;

    sortBook(bookDefinition.book);
    prepareBook(bookDefinition.book);
    convertTrancodeBookInObjectLoop(bookDefinition.book,objReturn.trancodeAtributeList);
    objReturn.name = bookDefinition.name;

    return objReturn;
}


let convertTrancodeBookInObjectLoop = (book, returnList) => {
    book.forEach((objAtributeDetails)=>{
        FIM_CORTE = INICIO_CORTE+objAtributeDetails.size;
        let atributevalue = HEAD_TRANCODE.substring(INICIO_CORTE, FIM_CORTE);
        HEAD_TRANCODE = HEAD_TRANCODE.substring(FIM_CORTE);
        returnList.push(buildTrancodeAtribute(objAtributeDetails,atributevalue));
    });
}

let getHeaderArray = (trancodeInJson) =>{
    let headerArrayReturn = []
    trancodeInJson.trancodeAtributeList.forEach((atribute)=>{
        headerArrayReturn.push(Object.keys(atribute));
    });
    return headerArrayReturn;
}

let getObjValueArray = (trancodeInJson) =>{
    let objValueArrayReturn = []
    trancodeInJson.trancodeAtributeList.forEach((atribute)=>{
        objValueArrayReturn.push(Object.values(atribute)[0]);
    });
    return objValueArrayReturn;
}