function factorial(n){

    let num =1
     if(n<0||n>12){
       throw new RangeError()
     }else if(n===0){
       return 1
       }else{
         for(let i=1; i<=n; i++){
           num *=i
         }
         return num
       }
     }