import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printAmountLotto(input) {
    Console.print(`\n${input / 1000}개를 구매했습니다.`);
  }
}

export default OutputView;
