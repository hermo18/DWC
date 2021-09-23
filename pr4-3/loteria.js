let combinaciones=[];
let temp=[];
let n;

for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 6; j++) {
        while (temp.length<6) { 
            n=Math.floor(Math.random()*50)+1;
            if(temp.includes(n)==false){
                temp.push(n);
            }
        }    
    }
    combinaciones.push(temp);
    temp=[];
}
console.log(combinaciones);