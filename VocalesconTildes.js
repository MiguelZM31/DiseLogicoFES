function contarVocalesConTilde(txt) {
    const regex = /[ÁÉÍÓÚáéíóú]/g;
    const matches = txt.match(regex);
    
    return matches ? matches.length : 0;
}

const frase = "Él es Jude Bellingham jugador del Real Madrid el equipo más ganador de la UEFA Champions Legue y el mejor club de la historia";
const numVocalTilde = contarVocalesConTilde(frase);
console.log("El número de vocales con tilde es: " + numVocalTilde);
