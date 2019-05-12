function map(arr, callback, thisArg) {
  var length = arr.length;
  var results = [];
  for (var i = 0; i < length; i = i + 1) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
}
module.exports = map;
