function deepCloneObject(obj) {
  if (typeof obj != "object") {
    return obj;
  }
  if (!obj) {
    return obj;
  }
  var cloned = obj instanceof Array ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      cloned[i] = deepCloneObject(obj[i]);
    }
  }
  return cloned;
}

module.exports = deepCloneObject;
