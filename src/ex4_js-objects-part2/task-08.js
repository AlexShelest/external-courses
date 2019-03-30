function lowCase(str) {
  var newStr = str.toLowerCase();
  var newArray = newStr.split(" ");
  for (var i = 1; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }
  newStr = newArray.join("");
  return newStr;
}

module.exports = lowCase;
