function deleteNth(arr, n) {
    let counts = {};
    let result = [];

    for(let num of arr) {
        if(counts[num] >= n) continue;

        if(!counts[num]) counts[num] = 0;
        counts[num]++;
        result.push(num);
    }

    return result;
}