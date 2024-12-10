import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import RandomDraw from '../models/RandomDraw.js';
import Lotto from '../Lotto.js';

class Controller {
  static async run() {
    try {
      const money = await InputView.moneyInput();
      const amountOfLotto = money / 1000;
      OutputView.printAmountLotto(amountOfLotto); // 구매한 로또의 갯수
      const myLotto = RandomDraw.drawLotto(amountOfLotto);
      OutputView.printLottoNumber(myLotto);
      const numbers = await InputView.winningNumberInput();
      const winningNumber = new Lotto(numbers.split(','));

      const bonusNumber = await InputView.bonusNumberInput();
      console.log(winningNumber);
      console.log(bonusNumber);
    } catch (error) {
      OutputView.print(error);
      throw error;
    }
  }
}

export default Controller;
