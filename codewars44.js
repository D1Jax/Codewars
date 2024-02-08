function lineupStudents(students){
    let arr = students.split(' ')
     arr.sort((a, b)=>{
     if(a.length===b.length){
        return b.localeCompare(a)
      }else{
        return b.length-a.length
      }
    })
  return arr
     
  }