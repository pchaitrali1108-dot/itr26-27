// for loop in array

let fruits=["apple","mango","orange"];
console.log(fruits);

let fruitsUpper = [];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
    fruitsUpper.push(fruits[i].toUpperCase());
}

console.log(fruitsUpper);

const num=[1,2,3,4];
num.push(5,6,7);
console.log(num);
