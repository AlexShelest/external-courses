function findProp(prop, obj) {
  if (!obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
  return false;
}

module.exports = findProp;
