let a=prompt("INTRODUCE EL NUMERO A:");
let b=prompt("INTRODUCE EL NUMERO B:");
let c=prompt("INTRODUCE EL NUMERO C:");

let nMax="a";

if(a<b){
    if(b<c){
        nMax="c";
    }else{
        nMax="b";
    }
}

alert("EL NUMERO MAYOR ES: "+nMax);
