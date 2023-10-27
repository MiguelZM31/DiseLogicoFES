function dominantes(arr) {
    const res = [];
    let k = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let siDominantes = true;
      for (let m = i + 1; m < arr.length; m++) {
        if (arr[i] <= arr[m]) {
          siDominantes = false;
          break;
        }
      }
      if (siDominantes) {
        res[k] = arr[i];
        k++;
      }
    }
    return res;
  }
  
  const arr=[89, 92, 25, 15, 7, 48, 76];
  const arr1=dominantes(arr);
  console.log("Valores:"+arr1);
