"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - 4  * a * c;

  if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D) )/(2*a);
    let x2 = (-b - Math.sqrt(D) )/(2*a);
    arr.push(x1, x2);  
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  return Number(totalPayment);
}