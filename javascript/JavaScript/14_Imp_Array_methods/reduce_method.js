// ###################### Reduce Method ###################

//Real World Example


const userCart = [
    {product_Id : 1,product_Name : "mobile", price : 20000},
    {product_Id : 2,product_Name : "TV", price : 35000},
    {product_Id : 3,product_Name : "Laptop", price : 60000},
    {product_Id : 4,product_Name : "charger", price : 2000},

]
// we can also pass initial value in reduce
const cartTotal = userCart.reduce((totalPrice,currentProduct)=>{
     return totalPrice + currentProduct.price ;
},0);
 Initial value = 0;
// Set to 0 here intial value

console.log(cartTotal);

// totalPrice      currentProduct Price       return
//   0                 20000                   20000
//  20000              35000                   55000
//  55000              60000                   115000
//  115000             2000                    117000