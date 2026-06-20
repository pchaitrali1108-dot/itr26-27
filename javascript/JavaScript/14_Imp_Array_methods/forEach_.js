//  ################# For Each ##############
const numbers = [4,2,5,8];

function myfunct(number,index){

    // console.log("index is ",index);
    // console.log(`${number}*2 = ${number*2} `);

    console.log(`index is ${index} and number is ${number}`);
}

// multiplyby2(numbers[0],0);
// multiplyby2(numbers[1],1);
// multiplyby2(numbers[2],2);


for(let i =0;i<numbers.length;i++){

    myfunct(numbers[i],i);
}



numbers.forEach(myfunct);



// ___________________________________________________________

/*
const numbers = [4,2,5,8];

numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);

})

*/

// --------------------------------------------------------------

/*
const numbers = [4,2,5,8];

numbers.forEach(function(number,index){
    console.log(`${number} x 2 = ${number*2} and at index ${index}`);
})

*/

