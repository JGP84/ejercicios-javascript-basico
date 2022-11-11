// calcular el factorial de 10 utilizando un solo bucle for

const numberFactorial = 10;

let resultado = 1;

for (let i = numberFactorial; i > 0; i--) {

    resultado *= i;

    
}

console.log('resultado', resultado)