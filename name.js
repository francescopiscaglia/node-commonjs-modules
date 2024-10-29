// 1 - names.js

// Crea una funzione che accetta due parametri: "firstName", "lastName". 
// La funzione dovrebbe restituire un oggetto con le proprietà "firstName" e "lastName".

function person(firstName, lastName) {
    return {
        "firstName": firstName,
        "lastName": lastName,
    };
};

// Esporta la funzione dal file
module.exports = person;

