function vowel2index(str) {
    let result = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i =  0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result += (i+1);
      } else {
        result += str[i];
      }
    }
  
    return result;
  }