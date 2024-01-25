function mergeArrays(arr1, arr2) {
    let joined = arr1.concat(arr2)
    let ordered = joined.sort((a, b)=>a-b)
    return ordered.filter((a,b)=>ordered.indexOf(a)===b)
  }