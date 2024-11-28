module.exports = function computeFiguresPoint(dices) {
  for (let i = 0; i < dices.length; i++) {
    const isBrelan = dices.filter((dice) => dice === dices[i]).length === 3;
    const isCarre = dices.filter((dice) => dice === dices[i]).length === 4;
    if (isBrelan) {
      return 28;
    }
    if (isCarre) {
      return 35;
    }
  }
  const isYamsFigure = dices.every((dice) => dice === dices[0]);
  if (isYamsFigure) {
    return 50;
  }
  return dices.reduce((acc, curr) => acc + curr, 0);
};
