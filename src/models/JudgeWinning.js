class JudgeWinning {
  static judge(myLotto, winningNumber, bonusNumber) {
    const winningNum = winningNumber.map(Number);

    const winning = myLotto.map(numbers => {
      const filteredNumber = numbers.filter(num => winningNum.includes(num));
      return filteredNumber.length;
    });

    const bonus = myLotto.map(numbers => {
      return this.judgeBonus({ numbers, bonusNumber });
    });

    return [winning, bonus];
  }

  static judgeBonus({ numbers, bonusNumber }) {
    let bonus = 0;
    if (numbers.includes(Number(bonusNumber))) {
      bonus += 1;
    }
    return bonus;
  }

  static prize(winner, bonusNumber) {
    let three = 0;
    let four = 0;
    let five = 0;
    let bonus = 0;
    let six = 0;
    for (let i = 0; i < winner.length; i += 1) {
      if (winner[i] === 3) {
        three += 1;
      } else if (winner[i] === 4) {
        four += 1;
      } else if (winner[i] === 5) {
        if (bonusNumber[i] === 1) {
          bonus += 1;
        } else five += 1;
      } else if (winner[i] === 6) {
        six += 1;
      }
    }
    return [three, four, five, bonus, six];
  }
}

export default JudgeWinning;
