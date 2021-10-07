function numberToPower(number, power){
  pow = 1
  for (let i=1;i<=power;i++){
    pow *= number
  }
  return pow
}


console.log(numberToPower(10,4))
