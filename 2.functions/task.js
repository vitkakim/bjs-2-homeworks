// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i ++){
    if (min > arr[i]){
      min = arr[i];
    }
    if (max < arr[i]){
      max = arr[i];
    }
    sum = sum + arr[i];
  } 
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, dif;
  min = arr[0];
  max = arr[0];
  dif = 0;
  for (let i = 0; i < arr.length; i ++){
    if (min > arr[i]){
      min = arr[i];
    }
    if (max < arr[i]){
      max = arr[i];
    }
  } 
  dif = Math.abs(max - min);
  return dif;
}
