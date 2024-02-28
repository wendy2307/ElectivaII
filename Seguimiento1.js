// declarar 5 variables con let
let Nombremascota = "Jayco";
let saludo = "Hello";
let edad = 3;
let raza = "Labrador Retriever";
let color ="Blanco y Negro"; 
// imprimir en consola los valores
console.log(Nombremascota);
console.log(saludo);
console.log(edad);
console.log(raza);
console.log(color);


//  función sin parámetros
const imprimirInformacionMascota = () => {
    console.log(`Nombre: ${Nombremascota}`);
    console.log(`Color: ${color}`);
};

// Llamar a la función
imprimirInformacionMascota();


// Función arrow con un parámetro
const saludarMascota = (nombre) => {
    console.log(`${saludo}, ${nombre}!`);
};

// imprimir
saludarMascota(Nombremascota);


// Función con 2 o más parametros
const obtenerInformacionMascota = () => {
    return `Nombre: ${Nombremascota}, Edad: ${edad}, Raza: ${raza}, Color: ${color}`;
};

//imprimir función
console.log(obtenerInformacionMascota());





