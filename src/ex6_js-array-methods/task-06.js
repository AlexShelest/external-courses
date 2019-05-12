function reduce(array, callback, initValue) {
  var previousValue = initValue === undefined ? array[0] : initValue;
  var i = initValue === undefined ? 1 : 0;

  for (i; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}

module.exports = reduce;
