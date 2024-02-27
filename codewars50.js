function isAllPossibilities(x) {
    let ordered = x.sort((a, b) => a - b);
    for (let i =  0; i < ordered.length; i++) {
      if (ordered[i] !== i) {
        return false;
      }
    }
    return true;
  }