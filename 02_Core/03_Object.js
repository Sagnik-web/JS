// Single ton Object

const firstObj = {
    1:"a",
    2:"b"
}

const secondObj = {
    3:"c",
    4:"d"
}

const obj1 = Object.create(firstObj)
const obj2 = Object.create(secondObj)

const obj = Object.assign({},firstObj,secondObj)

// console.log(obj1);
// obj1.printIntroduction(); xxxxxxxxxxxxxxxxxxxxx


// const obj = {...firstObj, ...secondObj}
// console.log(obj);

console.log(obj1 == firstObj);



