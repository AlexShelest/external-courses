function copyObj(obj) {
  var clonedObj = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}

module.exports = copyObj;
