// Creating a Set
let numbers = new Set();

// Adding values
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);

// Duplicate values are ignored
numbers.add(20);

console.log("Complete Set:");
console.log(numbers);

console.log("\nIterating using for...of:");
for (let value of numbers) {
    console.log(value);
}

console.log("\nIterating using values():");
for (let value of numbers.values()) {
    console.log(value);
}

console.log("\nIterating using keys():");
for (let key of numbers.keys()) {
    console.log(key);
}

console.log("\nUsing forEach():");
numbers.forEach((value) => {
    console.log(value);
});