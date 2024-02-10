function encontrarPatron (cadena, patron) {
    cadena = cadena.toLowerCase();
    patron = patron.toLowerCase();

    let count = 0;
    let index = cadena.indexOf(patron);

    while (index !== -1) {
        count++;
        index = cadena.indexOf(patron, index + 1);
    }

    return count;
}

function totalPatrones (cadena,arrayPatrones) {
    let totalcontador = 0;

    for (let i = 0; i < arrayPatrones.length; i++) {
        totalcontador += encontrarPatron(cadena, arrayPatrones[i]);
    }

    return totalcontador;

}

const prompt=require("prompt-sync")({sigint:true}); 
var patrones = ["AA","BCA","RBT","JT"];
var cadenatexto = prompt("Introduce una cadena de texto: ");
var total = totalPatrones(cadenatexto, patrones);

console.log("Cadena introducida: " + cadenatexto);
console.log("Patrones a buscar: " + patrones);
console.log("Aparecen: " + total);