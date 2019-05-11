function returnType(value) {
  if(isNaN(value)) return undefined;
  switch (typeof value) {
    case "number":
      return "number";
      break;
    case "string":
      return "string";
      break;
    default:
      return undefined;
      break;
  }
}

module.exports = returnType;
