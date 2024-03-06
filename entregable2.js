//Areglo 1 
const numeros = () => [1, 2, 3, 4, 5];

const miArreglo = numeros();
console.log(miArreglo); // Output: [1, 2, 3, 4, 5]
//metodo filtrar
const filtrarPares = (arr) => arr.filter((numero) => numero % 2 === 0);
const arregloOriginal = [1, 2, 3, 4, 5];
const pares = filtrarPares(arregloOriginal);

console.log(pares); // Output: [2, 4]

//Arreglo 2
const maquillaje = [
    {Maquilladora:'Wendy', 
    Tiempo:'Completo',
    Clienta:{
    Nombre:'Meliza Daza',
    Fecha:'miercoles 20/Agosto',
    Hora: '02:00 pm'
    }
    },
    {Maquilladora:'Maribel', 
    Tiempo: 'Medio tiempo',
    Clienta:{
    Nombre:'Salma Rivera',
    Fecha:'miercoles 20/Agosto',
    Hora: '4:00 pm'
    }
    },
]
//metodo filter
const MaquilladoraFiltrado = maquillaje.filter((Maquilladora) => Maquilladora.Tiempo==='Completo');
console.log(MaquilladoraFiltrado);


//Areglo 3
const numeroscualquiera = [2, 1, 80, 100, 25];
let replica = 0;
//metodo forEach
numeroscualquiera.forEach((item)=>{
    replica+=item;

})
console.log(replica);

//Arreglo 4 
//metodo push
let CrearVector = [];

const LlenarVectorNumerosPares = (CrearVector) =>
{
    for(i=2; i <= 20; i +=2)
    {
    CrearVector.push(i);
    }
    return CrearVector;
}
console.log(LlenarVectorNumerosPares(CrearVector));

