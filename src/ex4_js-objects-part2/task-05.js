function findStrInStr(str, second_str) {
  if (str.indexOf(second_str) !== -1) {
    return true;
  }
  return false;
}

module.exports = findStrInStr;
