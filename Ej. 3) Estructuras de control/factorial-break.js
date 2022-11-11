// calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

const numberFactorial = 10;

let resultado = 1;
let i = numberFactorial;

while ( true ) {

    resultado *= i;
    i--;
    
    if ( i <= 0 ){
        break;
    }
}


console.log('resultado', resultado)