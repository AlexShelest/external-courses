var calculator = {
  result: 0,
  getResult: function () {
    return calculator.result;
  },

  reset: function () {
    return (calculator.result = 0);
  },

  add: function (value) {
    if (Number.isFinite(value)) {
      calculator.result += value;
    }
    return this.add;
  },

  subtract: function (value) {
    if (Number.isFinite(value)) {
      calculator.result -= value;
    }
    return this.subtract;
  },

  divide: function (value) {
    if (Number.isFinite(value)) {
      calculator.result /= value;
    }
    return this.divide;
  },

  multiply: function (value) {
    if (Number.isFinite(value)) {
      calculator.result *= value;
    }
    return this.multiply;
  }
};

module.exports = calculator;
