let n=prompt("INTRODUCE UN NÚMERO POSITIVO:");
let factorial=1;
while (n<0) {
    console.log("ERROR");
    n=prompt("INTRODUCE UN NÚMERO POSITIVO:")
}

for (let i = 1; i <=n; i++) {
    factorial=i*factorial;
}

console.log(factorial);