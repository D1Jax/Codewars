function doubleChar(str) {
    let arr = str.split('')
    return arr.map((a)=>a+a).join('')
    }