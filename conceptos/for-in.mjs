/*
For in:

- Para iterar por las keys de un objeto.
- Es útil para recorrer todas las propiedades enumerables de un objeto.

*/
console.log(`********** For in **********`);

const persona = {
  name: "ricardo",
  age: 32,
};

/*
Alternativas:
 */
console.log("Object.values", Object.values(persona));
console.log("Object.keys", Object.keys(persona));
console.log("Object.entries", Object.entries(persona));

console.log("");
console.log("For in:");
for (let param in persona) {
  console.log(param);
  console.log(persona[param]);
}
