let nombre=prompt("INTRODUZCA SU NOMBRE DE USUARIO: ");
let pass=prompt("INTRODUZCA SU CONTRASEÑA: ");

let control=true;

while (nombre!=null && control) {
    for (let i = 0; i < nombre.length; i++) {
        if((nombre.charAt(i)<'a' || nombre.charAt(i)>'z') && (nombre.charAt(i)<0 || nombre.charAt(i)>9)){
            control=false;
        }
    }
    if (control==false) {
        control=true;
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
