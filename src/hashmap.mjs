export class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  //Method to generate a hash code
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

  //Method to set a new key, value pair
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

  //Method to get a key from the hashtable
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

  //Method to get all the keys stored
  keys() {
    let total = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!total.includes(this.keyMap[i][j][0])) {
            total.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return total;
  }

  //Method to get all values in the hashtable
  values() {
    let total = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!total.includes(this.keyMap[i][j][1])) {
            total.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return total;
  }
}
