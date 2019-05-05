function filter(arr, callback, thisArg) {
  var length = arr.length;
  var results = [];
  for (var i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
}

module.exports = filter;
