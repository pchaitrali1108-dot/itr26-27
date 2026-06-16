let cars = ["ferrari","maruti","audi","bmw"];

console.log(typeof cars);
console.log(Array.isArray(cars));

let poppedelement=cars.pop();
console.log(cars);
console.log(poppedelement);
//---------------------------------------------------------------
// unshift
cars.unshift("mahindra");
console.log(cars);
// shift
let shiftedele = cars.shift();
console.log(cars);
console.log(shiftedele);
