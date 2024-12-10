import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class RandomDraw {
  static drawLotto(input) {
    const lotto = [];
    for (let i = 0; i < input; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.push(new Lotto(numbers));
    }
    const numbers = lotto.map(data => {
      return data.getNumbers.sort((a, b) => {
        return a - b;
      });
    });
    return numbers;
  }
}

export default RandomDraw;
