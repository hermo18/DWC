let texto1=prompt("INTRODUCE LA PALABRA 1: ");
let texto2=prompt("INTRODUCE LA PALABRA 2: ");

function anagrama(texto1, texto2) {
    return texto1.split("").sort().join("")===texto2.split("").sort().join("");
}

if (anagrama(texto1,texto2)) {
    console.log("ES UN ANAGRAMA");
}else{
    console.log("NO ES UN ANAGRAMA");
}