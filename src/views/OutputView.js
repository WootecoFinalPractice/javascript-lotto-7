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

  static printResult(three, four, five, bonus, six, money) {
    Console.print(`3개 일치 (5,000원) - ${three}개`);
    Console.print(`4개 일치 (50,000원) - ${four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${six}개`);
    Console.print(`총 수익률은 ${((5000 * three + 50000 * four + 150000000 * five + 30000000 * bonus + six * 2000000000) / money) * 100}%입니다.`);
  }
}

export default OutputView;
