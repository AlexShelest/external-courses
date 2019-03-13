function returnType(value) {
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
