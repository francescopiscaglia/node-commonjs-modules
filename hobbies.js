// 2 - hobbies.js

// Crea una funzione che accetta tre parametri: "hobbyOne", "hobbyTwo", "hobbyThree". 
// La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

function getHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        "hobbies": [hobbyOne, hobbyTwo, hobbyThree]
    };
};

// Esporta la funzione dal file.
module.exports = getHobbies;