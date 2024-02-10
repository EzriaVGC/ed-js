const Arraypositivos = [];

function leerNumeros() {
    let num;

    do {
        num = parseFloat(prompt("Introduce un número: "));
        if (!isNaN(num) && num >= 1) {
            Arraypositivos.push(num);
        } else if (isNaN(num) || num < 1) {
            break;
        }
    } while (true);
}

leerNumeros(); // Llamar a la función para leer números antes de usar el array

function operaciones(array) {
    var suma = 0;
    var mayor = array[0];
    var menor = array[0];
    var pares = [];
    var impares = [];

    for (var i = 0; i < array.length; i++) {
        suma += array[i];
        if (array[i] > mayor) {
            mayor = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }

        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        } else {
            impares.push(array[i]);
        }
    }

    var media = suma / array.length;
    var mediafinal = media.toFixed(2);
    
    console.log("****************************************");
    console.log("Números introducidos: " + array);
    console.log("Números pares: " + pares);
    console.log("Números impares: " + impares);
    console.log("Suma total: " + suma);
    console.log("Media: " + mediafinal);
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
}

 operaciones(Arraypositivos);