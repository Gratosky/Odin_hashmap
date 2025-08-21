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

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          return;
        }
      }
    }

    if (this.length() === this.keyMap.length) {
      console.log("Error: The hash table is full. Cannot add new items.");
      return;
    }

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    const loadFactor = this.length() / this.keyMap.length;
    if (loadFactor > 0.75) {
      this._resize();
    }
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

  //Method to delete a key, value pair from the hash table
  delete(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return null;
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  //Method to clear the hashtable
  clear() {
    this.keyMap = [];
    return;
  }

  //Method to confirm if key is present in bucket
  has(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return false;
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) return true;
    }

    return false;
  }

  //Method to return the length of the hashtable
  length() {
    let count = 0;

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        count += this.keyMap[i].length;
      }
    }

    return count;
  }

  //Method to rezise the hashtable when it is full
  _resize() {
    console.log("Resizing the hash table...");

    const newSize = getNextPrime(this.keyMap.length * 2);
    const newKeyMap = new Array(newSize);

    const oldKeyMap = this.keyMap;
    this.keyMap = newKeyMap;

    for (let i = 0; i < oldKeyMap.length; i++) {
      if (oldKeyMap[i]) {
        for (let j = 0; j < oldKeyMap[i].length; j++) {
          const key = oldKeyMap[i][j][0];
          const value = oldKeyMap[i][j][1];
          this.set(key, value);
        }
      }
    }

    console.log(`Resizing complete. New size is ${this.keyMap.length}`);
  }
}

//Helper function to generate prime number for the hashcode
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

function getNextPrime(num) {
  let next = num + 1;

  while (!isPrime(next)) {
    next++;
  }

  return next;
}

//A class hashset to represent our hashtable in key only
export class HashSet {
  constructor(size = 53) {
    this.table = new HashTable(size);
  }

  //Method to add a new value to the set
  add(value) {
    this.table.set(value, true);
  }

  //Method to check if value is present
  has(value) {
    return this.table.get(value) !== null;
  }

  //Method to delete a value from the set
  delete(value) {
    return this.table.delete(value);
  }

  //Method to return the size of the table
  size() {
    return this.table.length();
  }

  //Method to see the unique values
  values() {
    return this.table.keys();
  }
}
