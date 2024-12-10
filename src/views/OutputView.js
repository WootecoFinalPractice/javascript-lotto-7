import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printAmountLotto(input) {
    Console.print(`\n${input}개를 구매했습니다.`);
  }

  static printLottoNumber(input) {
    input.map(data => Console.print(`[${data.join(', ')}]`));
  }
}

export default OutputView;
