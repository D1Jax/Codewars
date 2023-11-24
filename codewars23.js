function stray(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result ^= numbers[i];
    }
    return result;
  }

  function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  } 