class Carta{
    constructor(palo, valor){
        this.palo=palo;
        this.valor=valor;
    }
}

let baraja=[];
let carta;

for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 13; j++) {
        switch (i) {
            case 0:
                carta=new Carta("oro", j);
                break;
            case 1:
                carta=new Carta("copas", j);
                break;
            case 2:
                carta=new Carta("bastos", j);
                break;
            case 3:
                carta=new Carta("espadas", j);
                break;
        
            default:
                break;
        }
        
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
if (eleccion!=null) {
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
                for (let i = 0; i < baraja.length; i++) {
                    console.log(baraja[i]);  
                }
                break;
            default:
                console.log("OPCIÓN NO VÁLIDA");
                break;
        }
        eleccion=prompt("SELECCIONA 1 PARA BARAJAR, 2 PARA SACAR CARTA, 3 PARA MOSTRAR BARAJA Y 4 PARA SALIR:");
    }
}
if (eleccion==null) {
    console.log("CANCELADO");
}
console.log("ADIÓS");
