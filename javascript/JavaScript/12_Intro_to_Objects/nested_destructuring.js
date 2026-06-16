// Nested Destructing


const users = [
    {
    userid : 1,
    user_name: "Chaitrali",
    gender : "female"},
    {
    userid : 2,
    user_name: "Prathamesh",
    gender : "male"},
    {
    userid : 3,
    user_name: "Priyanka",
    gender : "female"},

]

/*
const[{user_name},,{gender}] = users;
console.log(user_name);
console.log(gender);
*/


// Assigning variable as well
const[{user_name : user1_username,userid},,{gender:user3_gender}] = users;
console.log(user1_username);
console.log(user3_gender);
console.log(userid);
