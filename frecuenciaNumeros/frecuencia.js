let numeros=[];

let listaN=[0,0,0,0,0,0,0,0,0,0];

let contador=1;

for (let i = 0; i < 10000; i++) {
    numeros[i]=Math.floor(Math.random()*10)+1;
}
console.log(numeros);


for (let i = 0; i < numeros.length; i++) {
    for (let j = 1; j < 11; j++) {
        if (numeros[i]==j) {
            listaN[j-1]++;
        }
    }
}
console.log(listaN);

for (let i = 0; i < listaN.length; i++) {
    console.log("EL NÚMERO "+contador+" SE REPITE "+listaN[i]+" VECES");
    contador++;
}