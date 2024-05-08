const symbol = Symbol("123")

const obj = {
    name:"SB",
    roll:4,
    objFun:function () {
        console.log("Object Inner Function");
    },
    [symbol]:"ABC"
}

// console.log(obj);

// console.log(obj.name);
// console.log(obj["name"]);

const newObj = {
    "name":"Sagnik Biswas",
    "roll":6   

} 
// console.log(newObj.name);


// obj.objFun();
// console.log(typeof obj[symbol]);



const allObj = {
    1:"a",
    2:"b",
    3:{
        4:"a",
        5:"b",
        6:{
            7:"a",
            8:"b",
            9:"c"
        }
    }
}

// console.log(allObj);


// console.log(Object.keys(allObj));
// console.log(Object.values(allObj));

// console.log(Object.keys(obj));
// console.log(Object.values(obj));



// Object.freeze(obj)
// obj.name = "New"

console.log(Object.entries(obj));