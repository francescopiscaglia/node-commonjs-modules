/* 

2 - hobbies.js
Crea una funzione che accetta tre parametri: "hobbyOne", "hobbyTwo", "hobbyThree". La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.

3 - people.js*
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: "firstName", "lastName", "hobbies".
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

*/

// Importa la tua funzione da names.js
const person = require("./name.js");

// invoco la funzione salvandola in una costante
const student = person("Mario", "Rossi");
console.log(student);
