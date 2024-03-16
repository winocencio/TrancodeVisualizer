
let BOOK_1 = {
    "name" : "BOOK EXAMPLE LIST",
    "book" : [
        {
            "name": "nome",
            "position": 1,
            "size" : 10,
            "object" : {}
        },
        {
            "name": "codigo",
            "position": 0,
            "size" : 2,
            "object" : {}
        },
        {
            "name": "contas",
            "position": 2,
            "amount" : 2, //Tamanho dos itens da Lista, 2x
            "list" : {
                "key": "codigo",
                "src": [
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
        
        sortBook(obj.list.src);
    });
}

// let convertTrancodeBookInObject = (trancode,)



console.log(BOOK_0);
console.log("name :" + BOOK_0.name);
sortBook(BOOK_0.book);
console.log("book :" + JSON.stringify(BOOK_0.book));
console.log("name :" + BOOK_0.name);

console.log("book :" + JSON.stringify(convertTrancodeInJson(BOOK_0.examples[0],BOOK_0)));

/* Fazer: 
    Adicionar o objeto TYPE no bookDefinition
    Como transformar os niveis dos objetos?
*/