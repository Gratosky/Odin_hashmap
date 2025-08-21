export class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hashcode = 0;
    let primeMultiplier = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      hashcode = (hashcode * primeMultiplier + value) % this.keyMap.length;
    }

    return hashcode;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return null;
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }

    return null;
  }
}
