export default class Team {
  constructor(chars) {
    this.chars = chars;
  }

  [Symbol.iterator]() {
    const { chars } = this;
    let i = 0;
    return {
      next() {
        if (i >= chars.length) {
          return {
            value: undefined,
            done: true,
          };
        } if (i === chars.length - 1) {
          return {
            value: chars[i++],
            done: true,
          };
        }
        return {
          value: chars[i++],
          done: false,
        };
      },
    };
  }
}
