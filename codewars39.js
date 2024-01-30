function bouncingBall(h, bounce, window) {
    if (window > h||bounce>=1||bounce <=0) {
       return -1;
    }
   
    let count = 0;
   
    while (h > window) {
       h *= bounce;
       count++;
    }
   
    return count * 2 -1;
   }