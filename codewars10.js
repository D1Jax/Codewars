function DNAStrand(dna){
    const pairs={
      'T':'A',
      'A':'T',
      'C':'G',
      'G':'C'
    }
    return dna.split('').map((a)=>pairs[a]).join('')
       
    
     }
    