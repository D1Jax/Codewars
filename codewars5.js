
var number = function(busStops){
    // Good Luck! need to 
    let num1 = 0
    let num2 = 0
    for(let i = 0; i<busStops.length; i++){
       num1 += busStops[i][0]
       num2 += busStops[i][1]
    }
    
if (num1 - num2 <0){
    return 0
}
else{
    return num1 -num2
}

}
