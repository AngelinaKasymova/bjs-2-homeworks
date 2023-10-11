function getArrayParams(...numbers) {
  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;

  for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i];
    }

    if(numbers[i] < min) {
      min = numbers[i];
    } 

    sum = sum + numbers[i];
  }
  
  let avg = Number((sum / numbers.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  if(arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  let min; 
  let max;
  
  if(arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);  
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if(arr.length > 0) {
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement +=  arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
      
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if(arr.length > 0) {
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
      
  } else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
