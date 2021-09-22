let n=0;


function aleatorio() {
    n= Math.floor(Math.random()*5) //n aleatorio del 0 al 4
    //console.log(n);
}

aleatorio();

switch (n) {
    case 0:
        document.body.style.backgroundColor="red";
        break;
    case 1:
        document.body.style.backgroundColor="blue";
        break;
    case 2:
        document.body.style.backgroundColor="green";
        break;
    case 3:
        document.body.style.backgroundColor="pink";
        break;
    case 4:
        document.body.style.backgroundColor="yellow";
        break;
    default:
        break;
}