module.exports = function computeFiguresPoint(dices) {
  const isYamsFigure = dices.every((dice) => dice === dices[0]);
  if (isYamsFigure) {
    return 50;
  }
  return dices.reduce((acc, curr) => acc + curr, 0);
};
