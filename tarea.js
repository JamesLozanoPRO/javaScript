/*
Crear el metodo convertirEnCamel , el cual reciba caomo parámetro un string con palabras separadas con guion y devuelva palabras con mayuscula

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/

function convertirEnCamel(Str){
    let palabras = Str.split("-");
    let resultado = palabras.map((palabra, posicion) => {
        if(posicion == 0){
            return palabra.toLowerCase();
        }
        else{
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
    });
    return resultado.join('');

    
}

console.log(convertirEnCamel(prompt("Ingrese las palabras separadas por un - ", "una-cadena-corta")));

/*
Escribir la función filtrarRango(arreglo, a, b) que obtenga un arreglo , busque los elementos con valor mayor o igual a 'a' y menor o igual a 'b' y devuelva un arreglo con los resultados. 

let arr = [5, 3, 8, 1];
let filtrado = filtrarRango(arr, 1, 4)
console.log(filtrado); // 3, 1
console.log(arr); // 5, 3, 8, 1
*/
function filtrarRango(arreglo, a, b) {
    return arreglo.filter(elemento => elemento >= a && elemento <= b);
}

let arr = [5, 3, 8, 1];
let rangoFiltrado = filtrarRango(arr, 1, 4);

console.log(rangoFiltrado);  

