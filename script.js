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
