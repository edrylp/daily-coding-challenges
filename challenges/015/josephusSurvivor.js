function josephusSurvivor(n,k){
  const numbersArray = []
  for (let i = 1; i <= n; i++) {
    numbersArray.push(i)
  }

  let arraySize = n; 
  const step = k - 1;
  let index = 0; 

  while (arraySize > 1) {
    index = (index + step) % arraySize;
    array.splice(index, 1);
    arraySize -= 1;  
  }
  
  return array;
}