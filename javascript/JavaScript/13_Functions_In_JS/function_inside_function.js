// ################ Function Inside Function ######################
function outerFunction() {
  console.log("I am outer function");

  function innerFunction() {
    console.log("I am inner function");
  }

  innerFunction(); // calling inner function
}

outerFunction();
