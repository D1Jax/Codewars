function sumDigits(number) {
  
    let separated = number.toString().split('');
    let nums = separated.filter((a) => a !== "-");
    return Number(nums.reduce((a, b) => Number(a) + Number(b)));
}