function fibonacci(n, a = 0, b = 1, resultado = "") {
  if (n === 0) {
    return resultado;
  }
  resultado += a + " ";
  return fibonacci(n - 1, b, a + b, resultado);
}

var n = 15; // Se puede cambiar este valor para obtener los primeros n números de la serie Fibonacci
var resultado = fibonacci(n);
console.log(resultado); 
