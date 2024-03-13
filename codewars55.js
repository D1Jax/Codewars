function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = (classPoints.reduce((a,b)=>a + b, 0))+yourPoints
    let average =totalPoints/(classPoints.length + 1)
    return yourPoints>average
   }