function SeriesSum(n)
{
  let addedNums = 0
  
 for (i=1; i<=n; i++){
   addedNums  += (1/(i*2+(i-2)))
 }
  return n === 0 ? '0.00' :(addedNums.toFixed(2))

}