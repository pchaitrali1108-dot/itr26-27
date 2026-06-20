// Cloning  Using Object.Assign


const obj = {
    key1 : 'item1',
    key2 : 'item2',
}
// heap memoryy contains data


// case 1:
// const obj2= obj;
// stack pointing memory of previous 


// case 2:
// we can clone by
// const obj2 = {...obj};
// new memory

//case 3:
// other way of cloning
// before Spread operator this was way :
const obj2 = Object.assign({},obj);
obj.key3 = 'item3';

console.log(obj);
console.log(obj2);




