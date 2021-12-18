function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant == 0){
    arr.push(- b / (2 * a));
  }
  if (discriminant > 0){
     arr.push((- b + Math.sqrt(discriminant)) / (2 * a) );
     arr.push((-b - Math.sqrt(discriminant)) / (2 * a) );
  }
  return arr;
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
