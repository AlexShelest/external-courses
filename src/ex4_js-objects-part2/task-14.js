function randomNumRange(min, max) {
  var random_num = min + Math.random() * (max - min);
  return Math.round(random_num);
}

module.exports = randomNumRange;
