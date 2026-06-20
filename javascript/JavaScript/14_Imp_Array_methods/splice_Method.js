// ################### Splice Method ##############################//
/*
What is splice method in JavaScript?
The splice() method is a built-in method for JavaScript Array 
objects. It lets you change the content of your array by removing 
or replacing existing elements with new ones. This method modifies 
the original array and returns the removed elements as a new array.
*/

// to add elements in array using splice method

let fruits = ["Apple", "Mango"];
fruits.splice(1, 0, "Banana");
console.log(fruits);

// to remove elements in array using splice method

//let fruits = ["Apple", "Banana", "Mango", "Orange"];
//fruits.splice(1, 2);
//console.log(fruits)

//to replace elements in array using splice method

//let fruits = ["Apple", "Banana", "Mango", "Orange"];
//fruits.splice(1, 2, "Grapes");
//console.log(fruits);