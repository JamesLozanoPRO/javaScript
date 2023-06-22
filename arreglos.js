let arr = [];

let frutis = ["Papaya", "Piña", "Mango", "Fresa", "Mora", "Lulo"];

console.log( frutis[0] );
console.log( frutis[5] );
console.log( frutis[3] );

console.log(frutis);

frutis[0] = "Coco";
console.log(frutis);
console.log( frutis[0] );

console.log(frutis.length);
console.log(frutis.length - 1); // obtengo el indice del ultimo elemento 

console.log(frutis[frutis.length - 1]);

console.log(frutis.at(-1)); //  Igual que el de arriba

// push, pop, shift, unshift

// push: Inserta un elemento añ final del arreglo 
// pop: Obtiene el elemento al final del arreglo y lo elimina

frutis.push("Mangostino");
console.log(frutis);


// frutis.pop();
// console.log(frutis);

console.log(frutis.pop());
console.log(frutis);

// shift: Extrae el primer elemento del arreglo 
// unshift: Agrega un elemento al comienzo del arreglo

console.log(frutis.shift());
console.log(frutis);

frutis.unshift("Guanábana");
console.log(frutis);

// Crear una función que agregue el nombre ingresado por parametro al arreglo names 
// Utilizar un prompt que use la función para agregar nombres 
// Escribir el codigo para insertar la cantidad de nombres que indique el usuario 
// Mostrar los nombres que hay en el arreglo


// let names = [];

// let addName = (name) => {
//     names.push(name);
// }


// let numNames = parent(prompt("Ingrese el numero de nombres: "));

// for(let i = 0; i < numNames; i++){
//     let nombre = prompt("Ingrese el nombre: ");
//     addName(nombre); 
// }

// for(let i = 0; i < numNames; i++){
//     console.log(names[i]);
// }


// console.log(frutis.length);

// // Trucando el arreglo 
// frutis.length = 2
// console.log(frutis.length)
// console.log(frutis)

// delete frutis[1];
// console.log(frutis.length);
// console.log(frutis[1]);
// console.log(frutis);

// // splice
// frutis.splice(1, 1);
// console.log(frutis.length)
// console.log(frutis)

// arr = ["Yo", "estudio", "JavaScript", "en", "el", "SENA"];
// console.log(arr);
// arr.splice(1,2, "Voy", "a", "bailar");
// console.log(arr);
// let datos = arr.splice(1,3);
// console.log(datos);
// arr.splice(1, 0, "estudio", "JavaScipt");
// console.log(arr);

// // ¿Qué hace la funcion slice? De un ejemplo donde use nombre completo


// let minombre = ["James", "Francois", "Lozano", "Gordillo"];
// let apellidos = minombre.slice(-3, -2);
// console.log(minombre);
// console.log(apellidos);


// let nombre2 = ["Juan", "Mateo"];
// let apellido2 = ["Morales", "Quintero"];

// let nombrecompleto = nombre2.concat(apellido2, "No", "existe", "en", "la", "vida real");
// console.log(nombrecompleto);

// forEach

// ["Mateo", "Marcos", "Lucas", "Juan", "María", "Magdalena"].forEach((item, index, array) => {
//     console.info(`${item} tiene el indice ${index} en ${array}`);
// }); // = Mateo tiene el indice 0 en Mateo,Marcos,Lucas,Juan,María,Magdalena

// // ["Mateo", "Marcos", "Lucas", "Juan", "María", "Magdalena"].forEach(alert); // Muestra en una alerta para cada una lo que hay en el array

// // indexof | lastIndexof | includes => ¿Para qué sirven? De un ejemplo para cada uno con Arreglos que involucren su nombre

// let nombreCompleto1 =  ["James", "Francois", "Lozano", "James", "Gordillo"];
// const posicion = nombreCompleto1.indexOf("Lozano"); //devuelve el índice 0, que es la primera aparición de "James" en el arreglo.
// console.log(posicion); 

// let nombreCompleto2 =  ["James", "Francois", "Lozano", "James", "Gordillo"];
// const ultimaPosicion = nombreCompleto2.lastIndexOf("i"); //devuelve el índice 3, que es la última aparición de "James" en el arreglo.

// console.log(ultimaPosicion); // Salida: 3

// let nombreCompleto3 =  ["James", "Francois", "Lozano", "Gordillo"];
// const incluyeNombre = nombreCompleto3.includes("Francois");
// console.log(incluyeNombre); // devuelve true porque "Gordillo" está presente en el arreglo nombres.

//find 

let users = [ // arreglo de objetos de usuario
    {id: 1, name: "Mateo"},
    {id: 2, name: "Marcos"},
    {id: 3, name: "Lucas"},
    {id: 4, name: "Juan"},
    {id: 5, name: "Mateo"},
    {id: 6, name: "Maria"},
];

//let resultado = arr.find(function(item, index, array) {/* cuerpo */});

let user = users.find(item => item.id == 3);
console.log(user);
console.log(user.name);


// findIndex

console.log(users.findIndex(user => user.name == "Maria"));
console.log(users.findIndex(user => user.name == "Pedro"));
console.log(users.findIndex(user => user.name == "Mateo"));

// findLastIndex

console.log(users.findLastIndex(user => user.name == "Mateo"))

// filter
// let result = arr.filter(function(item, index, array) {/* cuerpo */});

let someUsers = users.filter(item => item.name == "Mateo");
console.log(someUsers.length)
console.log(someUsers);

someUsers.forEach(user => console.log(user.name));


someUsers = users.filter(item => item.id < 3);
someUsers.forEach(user => console.log(user.name));


// __________________________________________________________
//      Transformar un array 
// __________________________________________________________


// map
// let result = arr.map(function(item, index, array){//cuerpo})


let lengths = users.map(item => item.name.length);
console.log(lengths);

let numbers = [8, 4, 15, 1, 7, 0, 2];

let doubles = numbers.map(num => 2 * num);
console.log(numbers);
console.log(doubles);

// sort(fn) 

numbers.sort();
console.log(numbers);

function compararNumeros(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compararNumeros);
console.log(numbers);

// reverse

numbers.reverse();
console.log(numbers);

// split

// let nombres = "Mateo, Marcos, Lucas, Juan, Maria, Magadalena";

// let nombresArr = nombres.split(", "); // parametros para separar o quitar 
// console.log(nombresArr);

let nombres = `Mateo 
Marcos 
Lucas 
Juan
`;

let nombresArr = nombres.split("\n");
console.log(nombresArr);

// for(let char of nombresArr) {
//     console.log(char);    
// }

nombresArr = nombresArr.filter(item => item != "");
console.log(nombresArr);

// reduce / reduceRight

// let value = arr.reduce(function(acumulador, item, index, array) { 

// }, inicio);

numbers = [23, 5, 17, 38, 24];
// let suma = numbers.reduce((total, num) => total + num, 0);
// let suma = numbers.reduce((total, num) => total + num); cuando no hay inicio el total coge el valor inicial 
let suma = numbers.reduce((total, num) => total + num);
suma = numbers.reduceRight((total, num) => total + num);

console.log(suma);

console.log("_____________________________________________________");

console.log(typeof {});
console.log(typeof []);

    
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

//join 

let nombresStr = nombresArr.join(';');
console.log(nombresStr);







