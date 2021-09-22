let nombre=prompt("Introduce el nombre: ");
let apellidos=prompt("Introduce los apellidos: ");
let salario=prompt("Introduce el salario: ");
let edad=prompt("Introduce la edad: ");

if (salario>1000 && salario <2000) {
    if (edad>45) {
        salario=salario*1.03;
    }else{
        salario=salario*1.10;
    }
}

if (salario<1000) {
    if (edad>=45) {
        salario=salario*1.15;
    }
    if (edad>=30 && edad <45){
        salario=salario*1.03;
    }if(edad<30){
        salario=1100;
    } 
}
console.log(salario);
