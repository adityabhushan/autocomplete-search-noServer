(function () {
    angular
        .module('search')
        .service('dataService', function(){

            this.dataArr = [{
                    "index": 1,
                    "age": 25,
                    "name": {
                        "first": "Vazquez",
                        "last": "Sosa"
                    },
                    "company": "Clay"
                },
                {
                    "index": 11,
                    "age": 37,
                    "name": {
                        "first": "Castillo",
                        "last": "Cruz"
                    },
                    "company": "Lydia"
                },
                {
                    "index": 21,
                    "age": 30,
                    "name": {
                        "first": "Lauri",
                        "last": "Gordon"
                    },
                    "company": "Nescatunga"
                },
                {
                    "index": 31,
                    "age": 32,
                    "name": {
                        "first": "Lacy",
                        "last": "Rice"
                    },
                    "company": "Kaka"
                },
                {
                    "index": 41,
                    "age": 24,
                    "name": {
                        "first": "Guerrero",
                        "last": "Potter"
                    },
                    "company": "Tooleville"
                },
                {
                    "index": 51,
                    "age": 31,
                    "name": {
                        "first": "Hillary",
                        "last": "Johnston"
                    },
                    "company": "Marysville"
                },
                {
                    "index": 61,
                    "age": 40,
                    "name": {
                        "first": "Benjamin",
                        "last": "Shepard"
                    },
                    "company": "Dahlen"
                },
                {
                    "index": 71,
                    "age": 24,
                    "name": {
                        "first": "Ryan",
                        "last": "Velazquez"
                    },
                    "company": "Calverton"
                },
                {
                    "index": 81,
                    "age": 38,
                    "name": {
                        "first": "Fay",
                        "last": "Hensley"
                    },
                    "company": "Ypsilanti"
                },
                {
                    "index": 91,
                    "age": 38,
                    "name": {
                        "first": "Dillon",
                        "last": "Wood"
                    },
                    "company": "Bergoo"
                },
                {
                    "index": 101,
                    "age": 34,
                    "name": {
                        "first": "Deloris",
                        "last": "Morales"
                    },
                    "company": "Sunriver"
                },
                {
                    "index": 111,
                    "age": 31,
                    "name": {
                        "first": "Mcbride",
                        "last": "Fulton"
                    },
                    "company": "Dana"
                },
                {
                    "index": 121,
                    "age": 25,
                    "name": {
                        "first": "Muriel",
                        "last": "Lambert"
                    },
                    "company": "Blanco"
                },
                {
                    "index": 131,
                    "age": 38,
                    "name": {
                        "first": "Bettye",
                        "last": "Dillard"
                    },
                    "company": "Masthope"
                },
                {
                    "index": 141,
                    "age": 28,
                    "name": {
                        "first": "Anita",
                        "last": "Taylor"
                    },
                    "company": "Keyport"
                },
                {
                    "index": 151,
                    "age": 34,
                    "name": {
                        "first": "Tiffany",
                        "last": "Mcfarland"
                    },
                    "company": "Cornfields"
                },
                {
                    "index": 161,
                    "age": 27,
                    "name": {
                        "first": "Gabriela",
                        "last": "Perry"
                    },
                    "company": "Riceville"
                },
                {
                    "index": 171,
                    "age": 39,
                    "name": {
                        "first": "Stone",
                        "last": "Mitchell"
                    },
                    "company": "Whitestone"
                },
                {
                    "index": 181,
                    "age": 34,
                    "name": {
                        "first": "Hunt",
                        "last": "Chen"
                    },
                    "company": "Freelandville"
                },
                {
                    "index": 191,
                    "age": 27,
                    "name": {
                        "first": "Irene",
                        "last": "Barrera"
                    },
                    "company": "Taycheedah"
                },
                {
                    "index": 201,
                    "age": 23,
                    "name": {
                        "first": "Hope",
                        "last": "Garza"
                    },
                    "company": "Grill"
                },
                {
                    "index": 211,
                    "age": 31,
                    "name": {
                        "first": "Cleveland",
                        "last": "Mcintyre"
                    },
                    "company": "Leming"
                },
                {
                    "index": 221,
                    "age": 38,
                    "name": {
                        "first": "Randall",
                        "last": "Sears"
                    },
                    "company": "Maybell"
                },
                {
                    "index": 231,
                    "age": 21,
                    "name": {
                        "first": "Young",
                        "last": "Byrd"
                    },
                    "company": "Oasis"
                },
                {
                    "index": 241,
                    "age": 20,
                    "name": {
                        "first": "Christina",
                        "last": "Fisher"
                    },
                    "company": "Glenville"
                },
                {
                    "index": 251,
                    "age": 27,
                    "name": {
                        "first": "Greta",
                        "last": "Wyatt"
                    },
                    "company": "Dixonville"
                },
                {
                    "index": 261,
                    "age": 26,
                    "name": {
                        "first": "Burgess",
                        "last": "Mcmillan"
                    },
                    "company": "Waterview"
                },
                {
                    "index": 271,
                    "age": 36,
                    "name": {
                        "first": "Gill",
                        "last": "Ford"
                    },
                    "company": "Woodburn"
                },
                {
                    "index": 281,
                    "age": 33,
                    "name": {
                        "first": "Charles",
                        "last": "Carpenter"
                    },
                    "company": "Lupton"
                },
                {
                    "index": 291,
                    "age": 22,
                    "name": {
                        "first": "Meyers",
                        "last": "Hess"
                    },
                    "company": "Bonanza"
                },
                {
                    "index": 301,
                    "age": 21,
                    "name": {
                        "first": "Elsie",
                        "last": "Valenzuela"
                    },
                    "company": "Summertown"
                },
                {
                    "index": 311,
                    "age": 34,
                    "name": {
                        "first": "Dean",
                        "last": "Grimes"
                    },
                    "company": "Stockwell"
                },
                {
                    "index": 321,
                    "age": 29,
                    "name": {
                        "first": "White",
                        "last": "Duncan"
                    },
                    "company": "Draper"
                },
                {
                    "index": 331,
                    "age": 28,
                    "name": {
                        "first": "Deanne",
                        "last": "Maynard"
                    },
                    "company": "Cotopaxi"
                },
                {
                    "index": 341,
                    "age": 20,
                    "name": {
                        "first": "Joan",
                        "last": "Griffith"
                    },
                    "company": "Orovada"
                },
                {
                    "index": 351,
                    "age": 33,
                    "name": {
                        "first": "Mcmillan",
                        "last": "English"
                    },
                    "company": "Yardville"
                },
                {
                    "index": 361,
                    "age": 35,
                    "name": {
                        "first": "Emily",
                        "last": "Mcleod"
                    },
                    "company": "Bynum"
                },
                {
                    "index": 371,
                    "age": 38,
                    "name": {
                        "first": "Ofelia",
                        "last": "Montgomery"
                    },
                    "company": "Slovan"
                },
                {
                    "index": 381,
                    "age": 21,
                    "name": {
                        "first": "Estrada",
                        "last": "Avery"
                    },
                    "company": "Madaket"
                },
                {
                    "index": 391,
                    "age": 40,
                    "name": {
                        "first": "Greer",
                        "last": "Hood"
                    },
                    "company": "Craig"
                },
                {
                    "index": 401,
                    "age": 37,
                    "name": {
                        "first": "Wilkinson",
                        "last": "Walton"
                    },
                    "company": "Helen"
                },
                {
                    "index": 411,
                    "age": 34,
                    "name": {
                        "first": "Wolfe",
                        "last": "Macdonald"
                    },
                    "company": "Tonopah"
                },
                {
                    "index": 421,
                    "age": 27,
                    "name": {
                        "first": "Hays",
                        "last": "Cameron"
                    },
                    "company": "Martinsville"
                },
                {
                    "index": 431,
                    "age": 21,
                    "name": {
                        "first": "Martina",
                        "last": "Wilkerson"
                    },
                    "company": "Saticoy"
                },
                {
                    "index": 441,
                    "age": 22,
                    "name": {
                        "first": "Toni",
                        "last": "Montoya"
                    },
                    "company": "Crucible"
                },
                {
                    "index": 451,
                    "age": 24,
                    "name": {
                        "first": "Evangeline",
                        "last": "Hopkins"
                    },
                    "company": "Naomi"
                },
                {
                    "index": 461,
                    "age": 22,
                    "name": {
                        "first": "Cross",
                        "last": "Rowe"
                    },
                    "company": "Kerby"
                }
            ];

            this.searchResult = function(searchTerm){
                let resultArr = this.dataArr.filter(function(obj){
                    if (obj.name.first.includes(searchTerm) || obj.name.last.includes(searchTerm) 
                    || obj.company.includes(searchTerm)) {
                        
                        return obj;
                    }
                })
                return resultArr;
            }



        });
})()