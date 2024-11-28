const BRELAN = 3;
const CARRE = 4;
const YAMS = 5;

module.exports = function computeFiguresPoint(dices) {
  for (let i = 0; i < dices.length; i++) {
    const filteredDicesLength = dices.filter(
      (dice) => dice === dices[i]
    ).length;

    const findDifferentDice = dices.find((dice) => dice !== dices[i]);

    if (
      filteredDicesLength === BRELAN &&
      dices.filter((dice) => dice === findDifferentDice).length === 2
    ) {
      return 30;
    }
    if (filteredDicesLength === BRELAN) {
      return 28;
    }
    if (filteredDicesLength === CARRE) {
      return 35;
    }
    if (filteredDicesLength === YAMS) {
      return 50;
    }
  }

  let isGrandeSuite = true;

  for (let i = 0; i < dices.length - 1; i++) {
    const currentGrandeSuite = dices[i];
    const currentDice = dices[i + 1];
    if (currentGrandeSuite + 1 !== currentDice) {
      isGrandeSuite = false;
      break;
    }
  }
  if (isGrandeSuite) return 40;

  return dices.reduce((acc, curr) => acc + curr, 0);
};
