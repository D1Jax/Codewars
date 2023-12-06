function getCount(str) {
    let count = 0
    
    str.split('').forEach((a)=>{
      if(a==='a'||a==='e'||a==='i'||a==='o'||a==='u'){
        count+=1
      }
    })
    return count
      
    }