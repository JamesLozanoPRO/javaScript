/**
 * Planificacion de ejecucion de instruciones 
 *
 * sellTimeout
 * 
 * setTimeout(fun|codigo ,  [delay], [arg1], ...)

*/

let saludar = (nombre) => {
    alert('Hola' + nombre);
};


// setTimeout (saludar, 3000);

// setTimeout(() => {
//     alert('Hola mundo a los 5 segundos');
// }, 5000);

// setTimeout(() => {
//     alert('Hola mundo a los 3 segundos');
// }, 3000);

// setTimeout(() => {
//     alert('Hola mundo al segundo');
// }, 1000);

/*
let id = setTimeout(saludar, 3000, ' Fulanito');

console.log(id);

//cancelar la ejecucion de un temporizador clearTimeout 

clearTimeout(id);


console.log(id);
*/

/**
 * Ejecutar codigo periodicamente 
 */

let intervalId = setInterval(() => {
    alert('Tick tock');
}, 2000);


setTimeout(() => {
    clearInterval(intervalId);
    alert('Ejecucion cancelada');
}, 5000);


// Todo Crear una funcion que cada segundo por 10 segundos, muestre en consola un número aleatorio entre 1 y 100.
