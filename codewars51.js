function scrollingText(text){

    let answer=[text.toUpperCase()]
    let arr = text.split('')
    
    for(let i=1; i<text.length; i++)
    {
    
    let removedItem = arr.shift()
    arr.push(removedItem)
    answer.push(arr.join('').toUpperCase())
    }
    return answer
    }