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

let buildTrancodeAtribute = (objAtributeDetails,atributevalue) => {
    let trancodeAtribute = {};
    trancodeAtribute[objAtributeDetails.name] = {
        "value" : atributevalue,
        "custom" : objAtributeDetails.object
    };
    return trancodeAtribute;
}

let convertTrancodeInJson = (trancode, bookDefinition) => {
    sortBook(bookDefinition.book);
    let inicioCorte = 0;
    let fimCorte = 0;
    let objReturn = {};
    objReturn.trancodeAtributeList = [];
    
    bookDefinition.book.forEach((objAtributeDetails)=>{
        
        fimCorte = inicioCorte+objAtributeDetails.size;
        let atributevalue = trancode.substring(inicioCorte, fimCorte);
        objReturn.trancodeAtributeList.push(buildTrancodeAtribute(objAtributeDetails,atributevalue));
        inicioCorte = fimCorte;
    })

    objReturn.name = bookDefinition.name;
    return objReturn;
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