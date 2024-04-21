export const crearSection = () => {
 
    const section = document.createElement('section');

    let contador = 0;
    const contadorElement = document.createElement('p');
    actualizarCantidadproducto(); 
    section.appendChild(contadorElement);
    function actualizarCantidadproducto() {
        contadorElement.textContent = `La cantidad del producto es: ${contador} `; 
        contadorElement.style.marginRight = '25px'; 
        contadorElement.style.fontSize = '25px'; 
    }

    const botonSuma = document.createElement('button');
    botonSuma.textContent = '+1';
    botonSuma.style.backgroundColor = 'pink'; 
    botonSuma.style.color = 'Black'; 
    botonSuma.style.marginRight = '25px'; 
    botonSuma.addEventListener('click', () => {
        contador++;
        actualizarCantidadproducto();
    });
    section.appendChild(botonSuma);

    const botonResta = document.createElement('button');
    botonResta.textContent = '-1';
    botonResta.style.backgroundColor = 'Salmon'; 
    botonResta.style.color = 'Black';
    botonResta.style.marginRight = '25px'; 
    botonResta.addEventListener('click', () => {
        contador--;
        actualizarCantidadproducto();
    });
    section.appendChild(botonResta);

    return section;
};