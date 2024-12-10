class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      console.log(numbers.length);
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 중복 오류');
    }
  }

  // TODO: 추가 기능 구현
  get getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
