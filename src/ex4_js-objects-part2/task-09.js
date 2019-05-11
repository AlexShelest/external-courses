function inserString(str, substr, num) {
  var newStr = str.split(" ");
  newStr.splice(newStr.length - num, 0, substr);
  return newStr.join(" ");
}

module.exports = inserString;
