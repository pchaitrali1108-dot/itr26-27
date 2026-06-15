let firstname = "Harshita";
let age = 16;

if(firstname[0]== "H" && age>15){
     console.log("Name starts with H and above 15");
}else{
    console.log("not qualified");
}


// Atleast a or b condition should be true 
// atleast 1 should be true to get if condition
// or else will run
if(firstname[0]=== "H" || age>18){
    console.log("Name starts with H or above 15");
}else{
   console.log("not qualified");
}