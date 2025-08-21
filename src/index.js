import { HashTable } from "./hashmap.mjs";
import { HashSet } from "./hashmap.mjs";

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

myHashTable.set("moon", "silver");
console.log(myHashTable.keyMap);

const myHashSet = new HashSet();

console.log("Is 'apple' in the set?", myHashSet.has("apple"));
myHashSet.add("apple");
myHashSet.add("orange");
myHashSet.add("banana");
myHashSet.add("apple");

console.log("All values in the set:", myHashSet.values());
