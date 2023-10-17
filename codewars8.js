function reverseWords(str) {
   
    let newArray =[]
    let broken = str.split(' ')
    broken.forEach(element => {
    newArray.push(element.split('').reverse().join(''))
 
    });
 
    let answer = newArray.join(' ')
    return answer
   }
 
 
 reverseWords('hello my friend')