function Calculator() {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  this.State = 0;

  this.add = function(value) {
    if (isNumeric(value)) {
      this.State += value;
    }

    return this;
  };

  this.subtract = function(value) {
    if (isNumeric(value)) {
      this.State -= value;
    }

    return this;
  };

  this.multiply = function(value) {
    if (isNumeric(value)) {
      this.State *= value;
    }

    return this;
  };

  this.divide = function(value) {
    if (isNumeric(value)) {
      this.State /= value;
    }

    return this;
  };

  this.reset = function() {
    this.State = 0;
    return this;
  };

  this.getResult = function() {
    return this.State;
  };

  this.setState = function(value) {
    if (isNumeric(value)) {
      this.State = value;
    }

    return this;
  };

  this.fetchData = function(callback) {
    var call = callback.bind(this);

    setTimeout(function() {
      var async = 500;
      call(async);
    }, 1000);

    return this;
  };
}

var Calculator = new Calсulator();

module.exports = Calculator;
