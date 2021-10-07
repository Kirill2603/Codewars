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