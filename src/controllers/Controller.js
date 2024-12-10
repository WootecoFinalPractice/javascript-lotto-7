import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import RandomDraw from '../models/RandomDraw.js';
import Lotto from '../Lotto.js';
import JudgeWinning from '../models/JudgeWinning.js';
import Validate from '../Validator/Validate.js';

class Controller {
  static async run() {
    try {
      const money = await InputView.moneyInput();
      Validate.validate(money);
      const amountOfLotto = money / 1000;
      OutputView.printAmountLotto(amountOfLotto); // 구매한 로또의 갯수
      const myLotto = RandomDraw.drawLotto(amountOfLotto);
      OutputView.printLottoNumber(myLotto);
      const numbers = await InputView.winningNumberInput();
      const winningNumber = numbers.split(',');
      new Lotto(winningNumber);
      const bonusNumber = await InputView.bonusNumberInput();
      OutputView.print(`당첨 통계\n---\n`);
      const [winning, bonus] = JudgeWinning.judge(myLotto, winningNumber, bonusNumber);
      const [three, four, five, bonusGame, six] = JudgeWinning.prize(winning, bonus);

      OutputView.printResult(three, four, five, bonusGame, six, money);
    } catch (error) {
      OutputView.print(error.message);
    }
  }
}

export default Controller;
