function SimpleCalc(name) {
  Calculator.apply(this, arguments);
}

SimpleCalc.prototype = Object.create(Calculator.prototype);
SimpleCalc.prototype.constructor = SimpleCalc;

SimpleCalc.prototype.add = function(variable) {
  if (this.__isNumeric(variable)) this.__state += variable;

  return this;
};

SimpleCalc.prototype.subtract = function(variable) {
  if (this.__isNumeric(variable)) this.__state -= variable;

  return this;
};

SimpleCalc.prototype.multiply = function(variable) {
  if (this.__isNumeric(variable)) this.__state *= variable;

  return this;
};

SimpleCalc.prototype.divide = function(variable) {
  if (this.__isNumeric(variable)) this.__state /= variable;

  return this;
};

SimpleCalc.prototype.sqrt = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.sqrt(variable);

  return this;
};

SimpleCalc.prototype.square = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.pow(variable, 2);

  return this;
};

SimpleCalc.prototype.abs = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.abs(variable);

  return this;
};

SimpleCalc.prototype.exp = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.exp(variable);

  return this;
};

SimpleCalc.prototype.cbrt = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.cbrt(variable);

  return this;
};

SimpleCalc.prototype.log = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.log(variable);

  return this;
};

SimpleCalc.prototype.log10 = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.log10(variable);

  return this;
};

var SimpleCalc = new SimpleCalc("Calculator");

var res = SimpleCalc.add(100)
  .divide(60)
  .multiply(25)
  .reset()
  .subtract(13)
  .getResult();

console.log(res);

SimpleCalc.setState(0);
console.log(SimpleCalc.getResult());

console.log(SimpleCalc.sqrt(9));
console.log(SimpleCalc.getResult());
console.log(SimpleCalc.square(100));
console.log(SimpleCalc.getResult());
