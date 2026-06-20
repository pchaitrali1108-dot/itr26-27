// Creating a Map
let students = new Map();

// Adding key-value pairs
students.set("name", "Chaitrali");
students.set("course", "Computer Technology");
students.set("city", "Pune");

console.log("Complete Map:");
console.log(students);

console.log("\nIterating through key-value pairs:");
for (let [key, value] of students) {
    console.log(`${key}: ${value}`);
}

console.log("\nIterating through keys:");
for (let key of students.keys()) {
    console.log(key);
}

console.log("\nIterating through values:");
for (let value of students.values()) {
    console.log(value);
}

console.log("\nUsing forEach():");
students.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});