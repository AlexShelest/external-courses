function reduce(arr, callback, value) {
  var before = value === undefined ? arr[0] : value;
  var i = value === undefined ? 1 : 0;
  for (i; i < arr.length; i = i + 1) {
    before = callback(before, arr[i], i, arr);
  }
  return before;
}

module.exports = reduce;
