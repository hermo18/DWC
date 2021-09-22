let maquina=Math.floor(Math.random()*100)+1;
// console.log(maquina);
let persona=prompt("Introduce un número del 1 al 100: ");

while (maquina!=persona && persona !== null) {
    console.log("FALLASTE");
    if (persona<maquina) {
        console.log("EL NUMERO ES MÁS GRANDE");
    }else{
        console.log("EL NUMERO ES MÁS PEQUEÑO");
    }
    persona=prompt("Introduce un número del 1 al 100: ");
}
if (maquina==persona) {
    console.log("GANASTE");
}
if (persona===null) {
    console.log("JUEGO CANCELADO");
}