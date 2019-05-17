function TrigonomCalc(name) {
  Calculator.apply(this, arguments);
}

TrigonomCalc.prototype = Object.create(Calculator.prototype);
TrigonomCalc.prototype.constructor = TrigonomCalc;

TrigonomCalc.prototype.sin = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.sin(variable);

  return this;
};

TrigonomCalc.prototype.cos = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.cos(variable);

  return this;
};

TrigonomCalc.prototype.tan = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.tan(variable);

  return this;
};

TrigonomCalc.prototype.ctan = function(variable) {
  if (this.__isNumeric(variable)) this.__state = 1 / Math.tan(variable);

  return this;
};

TrigonomCalc.prototype.sinh = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.sinh(variable);

  return this;
};

TrigonomCalc.prototype.cosh = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.cosh(variable);

  return this;
};

TrigonomCalc.prototype.tanh = function(variable) {
  if (this.__isNumeric(variable)) this.__state = Math.tanh(variable);

  return this;
};

TrigonomCalc.prototype.сtanh = function(variable) {
  if (this.__isNumeric(variable)) this.__state = 1 / Math.tanh(variable);

  return this;
};

var trig = new TrigonomCalc("Тригонометрический калькулятор");

console.log(trig.sin(1).cos(0));

trig.setState(1);
console.log(trig.getResult());

console.log(trig.сtanh(1));
console.log(trig.getResult());
