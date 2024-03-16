let BOOK_0 = {
    "name" : "BOOK EXAMPLE SIMPLE",
    "book" : [
        {
            "name": "nome",
            "position": 1,
            "size" : 10,
            "key" : false,
            "type" : "object",
            "object" : {}
        },
        {
            "name": "codigo",
            "position": 0,
            "size" : 2,
            "key" : false,
            "type" : "object",
            "object" : {}
        },
    ],

    "examples" : [
        "10   WILLIAN",
        "11   ADRIANA"
    ]
}

let BOOK_1 = {
    "name" : "BOOK EXAMPLE LIST",
    "book" : [
        {
            "name": "nome",
            "position": 1,
            "size" : 10,
            "key" : false,
            "object" : {}
        },
        {
            "name": "codigo",
            "position": 0,
            "size" : 2,
            "key" : true,
            "object" : {}
        },
        {
            "name": "contas",
            "position": 2,
            "size" : 24, // Preciso desse Size quando o tipo é lista?
            "key" : false,
            "list" : [
                {
                    "name": "conta",
                    "position": 1,
                    "size" : 5,
                    "object" : {}
                },
                {
                    "name": "agencia",
                    "position": 0, // position dentro da List
                    "size" : 7,
                    "object" : {}
                }
            ]
        }
    ],

    "examples" : [
        "10   WILLIANagenciacontaagenciaconta",
        "11   ADRIANA000011102345123456712345"
    ]
}

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
        
        sortBook(obj.list);
    });
}

let convertTrancodeBookInObject = (trancode,)

let convertTrancodeInJson = (trancode, bookDefinition) => {
    let objReturn = {};
    objReturn.name = bookDefinition.name;
    objReturn.trancodeAtributeList = [];
    let inicioCorte = 0;
    let fimCorte = 0;
    
    bookDefinition.book.forEach((objAtributeDetails)=>{
        let trancodeAtribute = {};
        let atributevalue = "";
        fimCorte = inicioCorte+objAtributeDetails.size;
        atributevalue = trancode.substring(inicioCorte, fimCorte);
        inicioCorte = fimCorte;     

        trancodeAtribute[objAtributeDetails.name] = {
            "value" : atributevalue,
            "key": objAtributeDetails.key,
            "custom" : objAtributeDetails.object
        };

        objReturn.trancodeAtributeList.push(trancodeAtribute);
    })

    //exemplo de json para montar a tabela
    let json = {
        "name" : bookDefinition.name,
        "trancodeAtributeList" : [
            {
                "codigo": {
                    "value": "001",
                    "key" : false,
                    "type" : "object",
                    "custom" : {}
                },
                "nome": {
                    'value': "WILLIAN",
                    "key" : false,
                    "type" : "object",
                    'custom' : {}
                }
            }
        ]
    }

    return objReturn;
}

console.log(BOOK_1);
console.log("name :" + BOOK_1.name);
sortBook(BOOK_1.book);
console.log("book :" + JSON.stringify(BOOK_1.book));
console.log("name :" + BOOK_0.name);

console.log("book :" + JSON.stringify(convertTrancodeInJson(BOOK_1.examples[0],BOOK_1)));

/* Fazer: 
    Adicionar o objeto TYPE no bookDefinition
    Como transformar os niveis dos objetos?
*/