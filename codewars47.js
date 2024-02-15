function minSum(arr) {
    let ordered = arr.sort((a, b) => a - b);
    let total = ordered[0] * ordered[ordered.length -  1];
    do {
      ordered.pop();
      ordered.shift();
      if (ordered.length >  0) {
        total += ordered[0] * ordered[ordered.length -  1];
      }
    } while (ordered.length >  0);
  
    return total;
  }