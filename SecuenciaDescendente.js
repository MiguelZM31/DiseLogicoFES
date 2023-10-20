function secuenciaDescendente(num) {
    if (num >= 0) {
        console.log(num);
        secuenciaDescendente(num - 1);
    }
}
secuenciaDescendente(14);
