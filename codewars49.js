function didWeWin(plays){
    // Well, did we win or not!!!
    let total =  0;
    let turnoverOccurred = false; 
    plays.forEach((a)=>{
      if(a[1] === 'turnover'){
      turnoverOccurred = true; 
      }else if(a[1] === "pass" || a[1] === "run"){
        total += a[0];
      }else if(a[1] === "sack"){
        total -= a[0];
      }
    });
  
    
    return turnoverOccurred ? false : total >  10;
  }