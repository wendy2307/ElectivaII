export const crearmain = (relleno)=>{
    const main = document.createElement('main');
    
    const mensajeBienvenida = document.createElement('p');
    mensajeBienvenida.textContent = relleno ;
    main.appendChild(mensajeBienvenida);
    
    return main;
    };