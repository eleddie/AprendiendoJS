/*
Async/Await:

- Permiten escribir código asincrónico de manera más clara y legible.
- Se utilizan con funciones que retornan promesas.

*/
console.log(`********** Async/Await **********`);

const sumPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      reject("No puedes sumar 0");
    }
    resolve(a + b);
  });
};

async function sumarNumeros() {
  try {
    const resultado = await sumPromise(0, 2);
    console.log(resultado);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Operación completada");
  }
  console.log("Fin");
}

sumarNumeros();
