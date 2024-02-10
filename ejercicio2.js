function esPrimo(numero){
    if (numero < 2) {
        return false;
    }

    for (var i = 2; i < numero; i++) {
        if (numero % i == 0){
            return false;
        }
    }
    return true;
}

function esPalindromo(cadena) {
    j = cadena.length;
    if(j == 0) {
        return false;
    }
    for (i = 0; i < j/2; i++) {
        if(cadena[i] != cadena[j-1-i]) {
            return false;
        }
    }
    return true;
}

const x = parseInt(prompt("Introduce un número X (Se comprobará desde 1 hasta X): "));

// arrays donde se guardaran los números primos y palíndromos
const primos = [];
const palindromos = [];

for (let i = 1; i <= x; i++) {
    if (esPrimo(i)) {
        primos.push(i); // .push para añadir el número primo al array
    }
    if (esPalindromo(i.toString())) {
        palindromos.push(i); // .push para añadir el palíndromo al array
    }
}

const PrimosyPalindromos = primos.filter(numero => palindromos.includes(numero));

console.log("Primos: " + primos);
console.log("Palíndromos: " + palindromos);
console.log("Primos y Palíndromos: " + PrimosyPalindromos);