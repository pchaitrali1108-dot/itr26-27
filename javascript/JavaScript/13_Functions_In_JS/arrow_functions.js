// #############  Basics OF Function ###########
// All Below Are Arrow Function 

// Printing data 
// Not convenient to print this way 

// console.log("This is console text");
// console.log("This is console text");
// console.log("This is console text");
// console.log("This is console text");
// console.log("This is console text");


// So We can make function and just call its function
// Declaration of Arrow function :
const printText = () =>{
    console.log("This is demo of arrow function");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();

const addition = ()=>{
    return 11+12
  }
  const result = addition();
  console.log(result);
  
   const addition1=  (num1,num2) =>{
      return num1+num2;
    }
    const result = addition1(10,20);
    console.log(result);
    
    // // Undefined + Undefined = NAN
    
    // const additionofThree = (num1,num2,num3)=>{
    //     return num1 + num2+num3
    
    //  }
    
    // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
     const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
     console.log(sumofThree);
    