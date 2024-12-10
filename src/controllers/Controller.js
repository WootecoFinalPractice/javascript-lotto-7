import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    OutputView.printAmountLotto(money);
  }
}

export default Controller;
