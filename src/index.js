import { HashTable } from "./hashmap.mjs";

const myHash = new HashTable();
console.log(`The hash for "hello" is: ${myHash._hash("hello")}`);
console.log(`The hash for "world" is: ${myHash._hash("world")}`);

const myHashTable = new HashTable(4); // Use a small size to force collisions

myHashTable.set("apple", "green");
myHashTable.set("orange", "orange");
myHashTable.set("grape", "purple");
myHashTable.set("banana", "yellow");
myHashTable.set("mango", "yellow"); // "mango" and "grape" will likely collide

console.log(myHashTable.keyMap);

myHashTable.get("apple");
console.log(myHashTable.get("apple"));

const allKeys = myHashTable.keys();
console.log(allKeys);

const allValues = myHashTable.values();
console.log(allValues);

const delIndex = myHashTable.delete("apple");
console.log(delIndex);

console.log(myHashTable.length());

myHashTable.set("mint", "blue");
myHashTable.set("avocado", "green");
console.log(myHashTable.length());

console.log(myHashTable.keyMap);
myHashTable.set("moon", "silver");
