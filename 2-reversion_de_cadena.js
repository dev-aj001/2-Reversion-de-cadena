// Reversión de cadena:
// Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.

function revertirPalabras(frase) {
    // Separacion de la frase en palabras
    const palabras = frase.split(' ');

    // Reversión del array de palabras
    const palabrasRevertidas = palabras.reverse();
    // Reconstrucción de la cadena
    const fraseRevertida = palabrasRevertidas.join(' ');
    
    return fraseRevertida;
}

const frase = "Hola Mundo desde JavaScript";
const fraseInvertida = revertirPalabras(frase);

console.log(`Frase original: "${frase}"`);
console.log(`Frase con palabras en orden inverso: "${fraseInvertida}"`);