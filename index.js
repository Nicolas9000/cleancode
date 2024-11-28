module.exports = function computeFiguresPoint(dice) {
  return dice.reduce((acc, curr) => acc + curr, 0);
};
