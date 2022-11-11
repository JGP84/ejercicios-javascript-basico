// calcular el factorial de 10 utilizando un bucle while

const numberFactorial = 10;

let resultado = 1;
let i = numberFactorial;

while ( i > 0 ) {

    resultado *= i;
    i--;
    
}

console.log('resultado', resultado)