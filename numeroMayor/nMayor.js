let a=20;
let b=14;
let c=80;

let nMax=a;

if(a<b){
    if(b<c){
        nMax=c;
    }else{
        nMax=b;
    }
}

console.log("EL NUMERO MAYOR ES: "+nMax);
