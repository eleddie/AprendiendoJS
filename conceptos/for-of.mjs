/*
For of:

- Para iterar sobre arrays.
- Es útil para recorrer todos los elementos de un array.

*/
console.log(`********** For of **********`);

const arr = [1, 2, 3, 4, 5, 6];

console.log("For loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("");
console.log("forEach:");
arr.forEach((elemento) => {
  console.log(elemento);
});

console.log("");
console.log("For of:");
for (let elemento of arr) {
  console.log(elemento);
}
