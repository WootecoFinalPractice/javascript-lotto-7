import { Console } from '@woowacourse/mission-utils';

class InputView {
  static moneyInput() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}
export default InputView;