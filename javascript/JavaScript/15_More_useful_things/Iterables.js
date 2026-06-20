// ################# Iterables ####################### 
/*
    What are iterables in JavaScript?
The iterable protocol allows JavaScript objects to define or 
customize their iteration behavior, such as what values are looped
 over in a for...of construct. Some built-in types are built-in 
 iterables with a default iteration behavior, such as Array or Map
  , while other types (such as Object ) are not.


*/

// ############### Array Like Objects ##########################

/* 
   
  ##  ##  ##  Array like Object  ## ## ##
  for example :
   1. those who have length property .
   2. those whose values can be accessed from index.
   example :- Strings.- Behaves like Array like Object

*/
/*
How to check if object is array-like in JavaScript?
Answer: Use the Array. isArray() Method

You can use the JavaScript Array. isArray() method to check whether
 an object (or a variable) is an array or not. This method returns 
 true if the value is an array; otherwise returns false . */

const first_name = "Chaitrali";
console.log(first_name.length);
console.log(first_name[3]);
