function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let m = 0; m < arr.length - 1 - i; m++) {
            if (arr[m] > arr[m + 1]) {
                let cambiar = arr[m];
                arr[m] = arr[m + 1];
                arr[m + 1] = cambiar;
            }
        }
    }

    return arr;
}

const arr = [15,8,12,4,21,1,19,5,7,61,40];
const cambiarArr = bubbleSort(arr);
console.log("El arreglo ya ordenado es el siguiente: "+ cambiarArr);
