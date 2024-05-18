
export default class ErrorRepository {
  constructor(key, value) {
    this.errors = new Map();
    this.errors.set(key, value);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return ('Unknown error');
    } else {
      return this.errors.get(code);
    }
  }
}