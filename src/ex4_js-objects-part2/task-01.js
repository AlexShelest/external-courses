function findProp(prop, obj) {
  if (!obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
}

module.exports = findProp;
