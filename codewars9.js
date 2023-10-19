function squareDigits(num){
  let split = num.toString().split('')
  let squared = split.map((a)=> (+a )**2)
  return Number(squared.join(''))
}