module.exports = function computeFiguresPoint(dices) {
  for (let i = 0; i < dices.length; i++) {
    const isBrelan = dices.filter((dice) => dice === dices[i]).length === 3;
    const isCarre = dices.filter((dice) => dice === dices[i]).length === 4;
    const isYamsFigure = dices.filter((dice) => dice === dices[i]).length === 5;

    const findDifferentDice = dices.find((dice) => dice !== dices[i]);

    if (
      isBrelan &&
      dices.filter((dice) => dice === findDifferentDice).length === 2
    ) {
      return 30;
    }
    if (isBrelan) {
      return 28;
    }
    if (isCarre) {
      return 35;
    }
    if (isYamsFigure) {
      return 50;
    }
  }

  return dices.reduce((acc, curr) => acc + curr, 0);
};
