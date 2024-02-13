function explode(x) {
    let score =  0;
    let arr =[]
    if(typeof x[0] !== 'number' && typeof x[1] !== 'number'){
      return 'Void!'
    }else{
      for (let i =  0; i < x.length; i++) {
          if (typeof x[i] === 'number') {
              score += x[i];
              }
          }
        for(let i =0;i<score;i++){
          arr.push(x)
          }
      return arr
     }

    }