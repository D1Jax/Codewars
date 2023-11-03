function longest(s1, s2) {
    // your code
let word = s1+s2
    let sorted = word.split('').sort()
    let answer= sorted.filter(function(item, pos) {
        return sorted.indexOf(item) == pos;
    })
    return answer.join('')
}