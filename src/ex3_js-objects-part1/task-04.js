function addIfNotFind(str, obj) {
  var newObj = obj;
  if (!newObj.hasOwnProperty(str)) newObj[str] = "new";
  return newObj;
}
module.exports = addIfNotFind;
