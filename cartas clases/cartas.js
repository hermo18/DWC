class Carta{
    constructor(palo, valor){
        this.palo=palo;
        this.valor=valor;
    }
}

let baraja=[];

for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 13; j++) {
        let carta=new Carta(i, j);
        baraja.push(carta);
    } 
}

function barajar(baraja) {
    baraja.sort(() => Math.random() - 0.5);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



let eleccion=prompt("SELECCIONA 1 PARA BARAJAR, 2 PARA SACAR CARTA, 3 PARA MOSTRAR BARAJA Y 4 PARA SALIR:");

while(eleccion!="4"){
    switch (eleccion) {
        case "1":
            barajar(baraja);
            console.log("BARAJADO");
            break;
        case "2":
            console.log(baraja[aleatorio(0, baraja.length)]);
            break;
        case "3":
            console.log(baraja);
            break;
        default:
            console.log("OPCIÓN NO VÁLIDA");
            break;
    }
    eleccion=prompt("SELECCIONA 1 PARA BARAJAR, 2 PARA SACAR CARTA, 3 PARA MOSTRAR BARAJA Y 4 PARA SALIR:");
}
console.log("ADIÓS");
