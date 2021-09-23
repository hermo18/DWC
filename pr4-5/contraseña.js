let nombre=prompt("INTRODUZCA SU NOMBRE DE USUARIO: ");
let pass=prompt("INTRODUZCA SU CONTRASEÑA: ");

let control=false;

while (nombre!=null && control==false) {
    for (let i = 0; i < nombre.length; i++) {
        if(nombre.charAt(i)<'a' && nombre.charAt(i)>'z' ){
            control=true;
        }
    }
    if (control==true) {
        control=false;
        console.log("NOMBRE INCORRECTO");
        nombre=prompt("INTRODUZCA SU NOMBRE DE USUARIO: ");
    }else{
        break;
    }
}
console.log("OLE");






if (nombre===null) {
    console.log("CANCELADO");
}