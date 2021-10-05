function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
