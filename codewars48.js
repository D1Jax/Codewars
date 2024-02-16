function maxProduct(numbers, size){
    let ordered = numbers.sort((a,b)=>b-a)
    let numsNeeded = ordered.slice(0,size)
    return numsNeeded.reduce((a,b)=>a*b, 1)
  }