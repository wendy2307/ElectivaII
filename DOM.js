import { crearEncabezado } from './Encabezado.js';
import { crearmain } from './Main.js';
import { crearSection } from './Section.js';

//////////////////////////////////////////////////////

const encabezado = crearEncabezado("Tienda virtual");
const body = document.querySelector('body');
body.appendChild(encabezado);

//Diseño    
const titulo = encabezado.querySelector('h1');
titulo.style.margin = '20'; 
titulo.style.textAlign = 'center';
titulo.style.flexDirection = 'column';

encabezado.style.display = 'flex'; 
encabezado.style.flexDirection = 'column'; 
encabezado.style.justifyContent = 'center'; 
encabezado.style.alignItems = 'center';
encabezado.style.color = '#FF40AB';



///////////////////////////////////////////////////

const main=document.querySelector('body');
main.appendChild(crearmain("¡Bienvenido a Wv Cosmetics!"));
main.appendChild(crearmain("Dueña: Wendy vasquez"));

//diseño
main.style.display = 'flex'; 
main.style.flexDirection = 'column'; 
main.style.justifyContent = 'center'; 
main.style.backgroundColor = '#FFFFFF';
main.style.color = '#FF40AB';

const mensajes = main.querySelectorAll('p');
mensajes.forEach(mensaje => {
    mensaje.style.fontSize = '30px'; 
    mensaje.style.margin = '25px'; 
    mensaje.style.textAlign = 'center'; 
});

////////////////////////////////////////////////////

const section = document.querySelector('main');
section.appendChild(crearSection());

//diseño
section.style.display = 'flex'; 
section.style.flexDirection = 'column'; 
section.style.justifyContent = 'center'; 
section.style.backgroundColor = '#FFFFFF';
section.style.color = '#FF40AB';

const estilos = document.createElement('style');
estilos.textContent = `
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4   0px;
    }
    `;
document.head.appendChild(estilos);

/////////////////////////////////////////////////
const bod = document.querySelector('body');
bod.style.margin = '15px';

const bod2 = document.querySelector('main');
bod2.style.margin = '15px';
