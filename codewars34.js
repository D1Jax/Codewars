const bearFur = (bears) => {
    if(bears[0]===bears[1]){
      return bears[0]
    }else if (bears[0]==='white' && bears[1]==='black'||bears[1]==='white' && bears[0]==='black'){
      return 'grey'
    }else if (bears[0]==='white' && bears[1]==='brown'||bears[1]==='white' && bears[0]==='brown'){
      return 'light brown'
    }else if (bears[0]==='brown' && bears[1]==='black'||bears[1]==='brown' && bears[0]==='black'){
      return 'dark brown'
    }else{
      return 'unknown'
    }
}