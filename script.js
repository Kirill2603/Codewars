<<<<<<< HEAD
function arrayMadness(a, b) {
  let sumA = 0
  let sumB = 0
  for (let i = 0; i < a.length; i++) {
    sumA += a[i]**2
  }
  for (let i = 0; i < b.length; i++) {
    sumB += b[i]**3
  }

  if (sumA>sumB) return true
  else return false
}
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]))


// function arrayMadness(a, b) {
//   return a.reduce( (sum, el) => sum + el ** 2, 0) >
//          b.reduce( (sum, el) => sum + el ** 3, 0);
// }
=======
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  posCol = 0;
  negSum = 0;
  for (let i = 0; i < input.length; i++)
    if (input[i] > 0) {
      posCol++;
    } else {
      console.log((negSum += input[i]));
    }
  return [posCol, negSum];
}

console.log(countPositivesSumNegatives(testData));
>>>>>>> 9944f5d1e3a4ef24cc6c57b33eb741a72c0830bd
