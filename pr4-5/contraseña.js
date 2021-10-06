let minusculas="abcdefghyjklmnñopqrstuvwxyz";
let mayusculas=minusculas.toUpperCase();
let caracteres="*-_;";
let numeros="0123456789";

let contadorM=0;
let contadorC=0;
let nombreBien=false;
let passBien=false;

let min=0;
let may=0;
let car=0;
let num=0;

let nombre=prompt("INTRODUZCA SU NOMBRE DE USUARIO: ");


while (nombre!==null && !nombreBien) {
    contadorM=0;
    contadorC=0;
    for (let i = 0; i < nombre.length; i++) {
        if (mayusculas.includes(nombre.charAt(i))==true) {
            contadorM++;
        }
        if (caracteres.includes(nombre.charAt(i))==true) {
            contadorC++;
        }
    }
    if (contadorM>0 ||contadorC>0) {
        console.log("NOMBRE ERRONEO");
        nombre=prompt("INTRODUZCA SU NOMBRE DE USUARIO: ");
    }else{
        console.log("NOMBRE CORRECTO");
        nombreBien=true;
    }
}

if (nombre===null) {
    console.log("CANCELADO");
}else{
    let contrasenya=prompt("INTRODUZCA SU CONTRASEÑA: ");
    if (contrasenya===null) {
        console.log("CANCELADO");
    }
    while (contrasenya!==null && !passBien) {
        min=0;
        may=0;
        car=0;
        num=0;
        for (let i = 0; i < contrasenya.length; i++) {
            if (mayusculas.includes(contrasenya.charAt(i))==true) {
                may++;
            }
            if (minusculas.includes(contrasenya.charAt(i))==true) {
                min++;
            }
            if (caracteres.includes(contrasenya.charAt(i))==true) {
                car++;
            }
            if (numeros.includes(contrasenya.charAt(i))==true) {
                num++;
            }
        }
        if (may<1||min<1||car<1||num<1) {
            console.log("CONTRASEÑA ERRONEO");
            contrasenya=prompt("INTRODUZCA SU CONTRSEÑA: ");
        }else{
            console.log("CONTRASEÑA CORRECTA");
            passBien=true;
        }
    } 
}

