function cutStr(str, max_length) {
  if (str.length > max_length) {
    return str.slice(0, max_length - 1) + "…";
  }
  return str;
}

module.exports = cutStr;
