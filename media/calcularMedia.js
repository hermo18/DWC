let n=prompt("INTRODUZCA UN NÚMERO: ");
let media=0;
let contador=0;


while (n!=null && n!=0) {
    media=media+parseInt(n);
    contador++;
    n=prompt("INTRODUZCA OTRO NÚMERO: ");
}
console.log(media);
if (n==0) {
    media=media/contador;
    console.log("LA MEDIA DE TODOS ESTOS NUMEROS ES: "+media);
    console.log(contador);
}else{
    console.log("CANCELADO");
}