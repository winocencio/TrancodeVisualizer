
let BOOK_02_LIST = {
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