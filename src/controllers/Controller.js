import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import RandomDraw from '../models/RandomDraw.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    const amountOfLotto = money / 1000;
    OutputView.printAmountLotto(amountOfLotto); // 구매한 로또의 갯수
    const myLotto = RandomDraw.drawLotto(amountOfLotto);
    OutputView.printLottoNumber(myLotto);
  }
}

export default Controller;
