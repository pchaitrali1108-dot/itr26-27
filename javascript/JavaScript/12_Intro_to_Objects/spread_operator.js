const arr1 = [ 1,2,3];
const arr2 = [5,6,7];

// const newarr = [...arr1];
// const newarr = [...arr1,...arr2];
// const newarr = [...arr1,arr2]; 
// whole array object added as third element 
// with ... it is spread and then added to elements of new arr
// const newarr = [...arr1,...arr2,82,13];


// const newarr = ["abc"];
// const newarr = [..."abc"];
// Spreading String and adding Each Element 
// On seperate Index
// In Case of Number they are not Iteratable
// we Have String Iterable , Array Iteratable
// const newarr = [...123241244214];
const newarr = [..."123241244214"];
// we can convert it into string and do it

console.log(newarr);

/// -------------------------------------------------------------------------------


// Spread Operator in Objects

// In Object only one key can exist they are unique
// value will override in key if added 
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key1 : "value3",
// };
// console.log(obj1);

/// -------------------------------------------------------------------------------


const obj1 = {
    key1 : "value1",
    key2 : "value2",
    
};
const obj2 = {
    key1 : "addingUnique",
    key3 : "value3",
    key4 : "value4",
};

// Spreading array items with key value pairs
const newobj = {...["item1","item2"]};

console.log(newobj);