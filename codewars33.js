function nbDig(n, d) {
    let count = 0  
    let arr =[]
    
    for(let i=0; i<=n; i++){
        arr.push(i**2)
    }
    
    arr.map((a)=>a.toString()).join('').split('').forEach(element => {
      if(element===d.toString()){
      count +=1
      }
    });
  
    return count
  
  }