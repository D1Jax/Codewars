function high(x){
    let xArray = x.split(' ')
    let doubleSplit=[]
    let numbered =[]
    
    for(let i=0; i<xArray.length; i++){
      doubleSplit.push(xArray[i].split(''))
    }  
    
    for(let i=0; i<doubleSplit.length; i++){
      numbered.push(doubleSplit[i].map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1));
    }
  
    let sums = numbered.map(arr => arr.reduce((a, b) => a + b, 0));
    let maxSum = Math.max(...sums);
    let index = sums.indexOf(maxSum);
  
    return xArray[index];
  }