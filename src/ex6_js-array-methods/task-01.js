function stringSlice(arr, start, end) {
  var slicedArr = [];
  var startPos, endPos;

  if (start === undefined) {
    startPos = 0;
  } else {
    startPos = start;
  }

  if (end === undefined || end >= arr.length) {
    endPos = arr.length;
  } else endPos = end;

  if (start < 0) startPos += arr.length;
  if (end < 0) endPos += arr.length;

  for (var i = startPos; i < endPos; i++) {
    slicedArr.push(arr[i]);
  }
  return slicedArr;
}

module.exports = stringSlice;
