/*
Class:

- Definición de clases en JavaScript.
- Uso de propiedades y métodos estáticos y de instancia.

*/
console.log(`********** Class **********`);

class Perro {
  // propiedades estáticas
  static cantidad = 0;

  raza; // propiedades
  genero; // propiedades
  edad; // propiedades

  constructor(raza, genero, edad) {
    this.raza = raza;
    this.genero = genero;
    this.edad = edad;
    Perro.cantidad += 1;
  }

  static dimeCantidad() {
    console.log(`Se han creado ${Perro.cantidad} perros`);
  }

  correr() {
    console.log("Estoy corriendo", this.raza);
  }

  cagar() {
    console.log("Estoy cagando");
  }
}

console.log("Creación de objetos:");
const yamin = new Perro("pastor", "chavala", 8);
const leah = new Perro("pomeranian", "niña", 9);
const mia = new Perro("raspi", "niña", 9);
const mia2 = new Perro("raspi", "niña", 9);

console.log("");
console.log("Métodos de instancia:");
yamin.correr();
leah.correr();
mia.correr();

console.log("");
console.log("Métodos estáticos:");
Perro.dimeCantidad();
