// Importa la tua funzione da names.js
const person = require("./names.js");

// Importa la tua funzione da hobbies.js
const hobbies = require("./hobbies.js");


// Crea una funzione che non ha parametri. 
// La funzione dovrebbe restituire un oggetto con tre proprietà: "firstName", "lastName", "hobbies".


function singlePerson() {

    // invoco le funzioni importate
    const getName = person("Francesco", "Piscaglia");
    const getHobbies = hobbies("Tech", "Nba", "Videogames");

    // creo un nuovo oggetto con le proprietá delle funzioni
    const newUser = {...getName, ...getHobbies};

    return newUser;
};

const me = singlePerson();
console.log(me);


