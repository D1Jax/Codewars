function drawSpider(legSize, bodySize, mouth, eye) {
    let leggysize;
    let bod;
    let numOfEyesOnOneSide = (Math.pow(2, bodySize))/2;
    let eyes = eye.repeat(numOfEyesOnOneSide);
  
    switch (legSize) {
      case   1:
        leggysize = "^^";
        break;
      case   2:
        leggysize = "/\\/\\";
        break;
      case   3:
        leggysize = "/╲╱\\";
        break;
      case   4:
        leggysize = "╱╲╱╲";
        break;
    }
  
    switch (bodySize) {
      case   1:
        bod = "()";
        break;
      case   2:
        bod = "(())";
        break;
      case   3:
        bod = "((()))";
        break;
    }
  
    let leftSide = leggysize.substring(0, leggysize.length /   2) + bod.substring(0, bod.length /   2) + eyes + mouth;
    let rightSide = eyes + bod.substring(bod.length /   2).split('').reverse().join('') + leggysize.substring(leggysize.length /   2)
    let spider = leftSide + rightSide;
   return spider
  }