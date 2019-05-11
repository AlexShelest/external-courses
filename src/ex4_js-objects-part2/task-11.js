function countSymbolsInObj(str) {
  var objSym = {};
  for (var i = 0; i < str.length; i++) {
    if (objSym[str[i]] == null) {
      objSym[str[i]] = {
        count: 0
      };
    }
    objSym[str[i]].count++;
  }
  for (var key in objSym) {
    console.log(key + " " + objSym[key].count);
  }
}

module.exports = countSymbolsInObj;
