/*
Arrow functions:

- Son funciones que se definen como variables.

Diferencias con las funciones tradicionales:
- No tienen su propio this.
- No hacen hoisting.

*/
console.log(`********** Arrow functions **********`);

// Función tradicional
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

// Arrow function
const sumArrow = (a, b) => {
  return a + b;
};
console.log(sumArrow(2, 3));

// Si la función sólo tiene una línea, se puede omitir el return y las llaves
const sumArrowShort = (a, b) => a + b;
console.log(sumArrowShort(2, 3));

// First class citizens
[].forEach((a) => {});

[].forEach(function (a) {});
