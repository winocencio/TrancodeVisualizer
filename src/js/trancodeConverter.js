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

let buildAtribute = (objAtributeDetails,atributevalue) => {
    if(Object.hasOwn(objAtributeDetails, 'list'))
        return buildTrancodeAtributeList(objAtributeDetails,atributevalue);

    return buildTrancodeAtributeObj(objAtributeDetails,atributevalue);
}

let buildTrancodeAtributeList = (objAtributeDetails,atributevalue) => {
    let nestedAtributeList = []
        let amount = objAtributeDetails.amount;
        for(let counter=0; counter < amount;counter++){
            let atributeList = [];
            atributevalue = convertTrancodeBookInObjectLoop(atributevalue,objAtributeDetails.list.src,atributeList)
            nestedAtributeList.push(buildTrancodeAtributeObj(objAtributeDetails,atributeList));
        }
        return nestedAtributeList;
}

let buildTrancodeAtributeObj = (objAtributeDetails,atributevalue) => {
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

    sortBook(bookDefinition.book);
    prepareBook(bookDefinition.book);
    convertTrancodeBookInObjectLoop(trancode,bookDefinition.book,objReturn.trancodeAtributeList);
    objReturn.name = bookDefinition.name;

    return objReturn;
}


let convertTrancodeBookInObjectLoop = (trancode,book, returnList) => {
    console.log(returnList);
    let fimCorte = 0
    book.forEach((objAtributeDetails)=>{
        fimCorte = INICIO_CORTE+objAtributeDetails.size;
        let atributevalue = trancode.substring(INICIO_CORTE, fimCorte);
        trancode = trancode.substring(fimCorte);
        returnList.push(buildAtribute(objAtributeDetails,atributevalue));
    });
    return trancode;
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