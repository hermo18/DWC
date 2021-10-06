let numero=prompt("INTRODUCE UN NÚMERO MYOR A 1: ");

function esPrimo(numero) {
    for (let i =2; i < numero; i++){
        if (numero%i==0) {
            return false;
        }
    }
    return true;
}

if (esPrimo(numero)) {
    console.log("ES PRIMO");
}else{
    console.log("NO ES PRIMO");
}