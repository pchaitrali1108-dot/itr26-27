// ############## Parameters Destructuring : ###########

// So where we use Parameters Destructing More often :

// 1. with Object
// 2. In react


// How to Destructure Parameter passed to function

const person = {
    firstname :"Chaitrali",
    gender : "female",
}

function printpersonDetails(obj){

    console.log(obj.firstname); // Chaitrali
    console.log(obj.gender);  // female
    console.log(obj.age);  // undefined
}

printpersonDetails(person);


/*

const person = {
    firstname :"Chaitrali",
    gender : "male",
    age : 500,
}
function printpersonDetails({firstname,gender,age}){

    console.log(firstname); 
    console.log(gender);  
    console.log(age);  // undefined
}
printpersonDetails(person);

*/
/*
What is parameter destructuring in JavaScript?
Destructuring in JavaScript is used to unpack or segregate 
values from arrays or properties from object literals into 
distinct variables, thus it allows us to access only the 
values required

*/