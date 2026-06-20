// ## Optional Chaining :


/*
     What is optional chaining in JavaScript?
  Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's
 property or calls a function. If the object accessed or function called using this
  operator is undefined or null , the expression short circuits and evaluates to 
  undefined instead of throwing an error.


*/
/*
const user = {
    firstName : "Chaitrali",
    address : {houseNumber : '12345'}    
}

console.log(user.firstName);
console.log(user.address);
// address is object
console.log(user.address.houseNumber);
//getting inside object value
*/
// -----------------------------------------------


const user = {
    firstName : "Chaitrali",
    // lets comment below pair ans see output
    address : {houseNumber : '12345'}    
}

console.log(user?.firstName);
console.log(user?.address);// undefined 
// address is object
console.log(user?.address?.houseNumber);
//Error : cannot read properties of undefined

// we dont want this error we are ok with undefined