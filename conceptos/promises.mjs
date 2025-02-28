/*
Promises:

- Son objetos que representan la eventual finalización (o falla) de una operación asincrónica.
- Pueden estar en uno de tres estados: pendiente, cumplida o rechazada.
- Se utilizan para manejar código asincrónico.

*/

const sumPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      reject("No puedes sumar 0");
    }
    resolve(a + b);
  });
};

await (async function () {
  console.log(`********** Promises **********`);
  await sumPromise(1, 2)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error("Error:", err);
    })
    .finally(() => {
      console.log("Operación completada");
    });

  await sumPromise(0, 2)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error("Error:", err);
    })
    .finally(() => {
      console.log("Operación completada");
    });
})();
