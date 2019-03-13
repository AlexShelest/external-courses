function checkElement(arr) {

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && j !== i) {
        return true;
      }
    }
    
  }
  return false;
}

module.exports = checkElement;
