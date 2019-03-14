function checkElement(arr) {
  for (var i = 1; i < arr.length; i++) 
    {
      if (arr[i] !== arr[0]) {
        return false;
      }
    }
  return true;
}

module.exports = checkElement;
