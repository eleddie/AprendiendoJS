/*
Template strings:

- Son strings que permiten expresiones incrustadas.
- Se definen con comillas invertidas ``.
- Se pueden incluir expresiones con ${}.
- Se pueden incluir saltos de línea.

*/
console.log(`********** Template strings **********`);

const name = "Juan";

console.log("Concatenación tradicional:");
const message = "Hola " + name + "!";
console.log(message);

console.log("");
console.log("Template strings:");
const message2 = `Hola ${name}!`;
console.log(message2);

console.log("");
console.log("Template strings con salto de línea:");
const message3 = `Hola
${name}!`;
console.log(message3);
