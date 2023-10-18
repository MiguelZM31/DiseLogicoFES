function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let m = i + 1; m < arr.length; m++) {
            if (arr[min] > arr[m]) {
                min = m;
            }
        }

        if (min !== i) {
            let cambio = arr[i];
            arr[i] = arr[min];
            arr[min] = cambio;
        }
    }
}

const arr = [5, 7, 26, 15, 70, 99, 20, 2];
selectionSort(arr);
console.log("El arreglo ya ordenado es el siguiente: "+ arr);
