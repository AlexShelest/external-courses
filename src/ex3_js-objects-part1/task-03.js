function checkInObj(str, obj) {
  for (key in obj) {
    if (key === str) {
      return true;
    } 
    return false;
  }
}

module.exports = checkInObj;
