function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((a) => !geese.includes(a));
    // return an array containing all of the strings in the input array except those that match strings in geese
  }