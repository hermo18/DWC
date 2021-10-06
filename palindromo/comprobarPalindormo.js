let cadena=prompt("INTRODUZCA UNA CADENA DE CARACTERES: ");

let cadenaInvertida=cadena.split("").reverse().join("");  //para poder invertir una string con reverse primero hay q transformarlo en un array

if (cadena===cadenaInvertida) {
    console.log("ES PALINDROMO");
}else{
    console.log("NO ES PALINDROMO");
}
