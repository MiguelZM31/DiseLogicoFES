class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class Busqueda {
    constructor() {
        this.inicio = null;
    }

    agregar(valor) {
        let nuevoNodo = new Nodo(valor);

        if (this.inicio === null || valor < this.inicio.valor) {
            nuevoNodo.siguiente = this.inicio;
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null && valor >= actual.siguiente.valor) {
                actual = actual.siguiente;
            }
            nuevoNodo.siguiente = actual.siguiente;
            actual.siguiente = nuevoNodo;
        }
    }

    imprimir() {
        let actual = this.inicio;
        while (actual !== null) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }
}

// Ejemplo de como se usa el programa
const listaEnlazada = new Busqueda();

listaEnlazada.agregar(20);
listaEnlazada.agregar(7);
listaEnlazada.agregar(14);
listaEnlazada.agregar(11);
listaEnlazada.agregar(67);
listaEnlazada.agregar(35);
listaEnlazada.agregar(67);

listaEnlazada.imprimir();
