// filter Method in Array Methods.

const numbers = [1,3,2,6,4,7,8,9,10,11];

const isOdd= function(number){
    return number % 2 !== 0;
}

const Odd_numbers = numbers.filter(isOdd);
console.log(Odd_numbers);

/*
What is filter method in JavaScript?
The filter() method creates a new array filled with elements 
that pass a test provided by a function. The filter() method 
does not execute the function for empty elements. 
The filter() method does not change the original array

*/