var capitals = function (word) {
	let arr=[]
  
  for(let i=0; i<word.length; i++){
    if(word[i]===word[i].toUpperCase()){
      arr.push(word.indexOf(word[i]))
    }
  }
  return arr
};