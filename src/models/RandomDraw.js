import { Random } from '@woowacourse/mission-utils';

class RandomDraw {
  static drawLotto(input) {
    for (let i = 0; i < input; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    }
  }
}

export default RandomDraw;
