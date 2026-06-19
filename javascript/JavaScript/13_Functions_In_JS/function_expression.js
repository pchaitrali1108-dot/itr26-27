// Function Expression 
// we initialize const variable to function
// so addition here expresses function
const substraction = function (){
  return 20-10;
}
const result = substraction();
console.log(result);

// ###################################################################

function addition(num1,num2){
    return num1+num2;
  }
  const result = addition(10,20);
  console.log(result);
  
  // Undefined + Undefined = NAN
  
//   function additionofThree(num1,num2,num3){
//       return num1 + num2+num3
  
//   }
  
  // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
//   const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
//   console.log(sumofThree);
  
  // ------------------------------------------------
  
  // odd or Even 
  
//   const isEven= function (num){
//     if(num % 2 === 0){
//           return true;
//       }
//       return false;
//   }
  
  // ------------------------------------------------
  
const isEven= function (num){
  
      return num % 2 === 0;
  }
  
  console.log(isEven(2));
  
  // ------------------------------------------------
  
// const firstChar =  function (str){
//       return str[0];
//   }
  
//   console.log(firstChar("abcdef"));
  
  // ------------------------------------------------
// Above All are function expression :
// anynomous function --> is assigned const variable
// to call the function .
