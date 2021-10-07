let palabra=prompt("INTRODUCE UNA PALABRA, FIN PARA ACABAR");
let final=[];



function invertir(palabra) {
    while (palabra!="fin") {
        final.push(palabra);
        palabra=prompt("INTRODUCE OTRA PALABRA, FIN PARA ACABAR");
    }
    final.reverse();
    return final;
}



console.log("CADENA INVERTIDA: "+invertir(palabra));
