class Validate {
  static validate(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 돈 다시 입력.');
    }
  }
}
export default Validate;
