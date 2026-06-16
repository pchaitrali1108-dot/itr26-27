// How to iterate in Objects
const person = {
    name : "Chaitrali",
    age : 18,
    "person hobbie" : ["singing","dancing","pottery"]
}

for(let key in person){
    console.log(key," : " ,person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
//-------------------------------------------------------------


// Objects.keys(person);

console.log(Object.keys(person));
// Gives Array of Keys
console.log(Object.values(person));
// Gives Array of Values

//-------------------------------------------------------------

console.log(typeof Object.values(person));

// Checking that the Object.Keys and Object.values 
// do they return arrays as values
const val = Array.isArray( Object.values(person));
console.log(val);

//-------------------------------------------------------------

for(let key of Object.keys(person)){
    console.log(key);
}


for(let value of Object.values(person)){
    console.log(value);
}