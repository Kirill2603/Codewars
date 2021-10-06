function digitize(n) {
  let arr = [];
  arr = String(n).split("").reverse().map(Number);
  return arr;
}
console.log(digitize(123123124));
