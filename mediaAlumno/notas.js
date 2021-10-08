let nota=prompt("INTRODUCE NOTAS HASTA QUE ESCRIBA fin:");
let listaNotas=[];
let media=0;

while (nota!="fin") {
    listaNotas.push(nota);
    nota=prompt("INTRODUCE NOTAS HASTA QUE ESCRIBA fin:");
}
console.log(listaNotas);

for (let i = 0; i < listaNotas.length; i++) {
    media=media+parseInt(listaNotas[i]);
}
media=media/listaNotas.length;
console.log(media);

listaNotas.splice(1,1);
console.log(listaNotas);