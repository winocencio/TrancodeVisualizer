
let BOOK_03_LIST_NESTED = {
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
                    },
                    {
                        "name": "unidades",
                        "position": 2, // position dentro da List
                        "amount" : 3,
                        "list" : {
                            "key": "agencia",
                            "src": [{
                                "name": "estado",
                                "position": 0,
                                "size" : 2,
                                "object" : {}
                            },{
                                "name": "cidade",
                                "position": 1,
                                "size" : 3,
                                "object" : {}
                            }]
                        }
                    }
                ]
            }
        }
    ],

    "examples" : [
        "10   WILLIANagenci0cont0SPSV0SPSA0SPPR0agenci1cont1SPSV1SPSN1SPPR1",
        "11   ADRIANA000011102345SPSV0SPSA0SPPR0123456712345SPSV1SPSN1SPPR1"
    ]
}