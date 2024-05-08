const globalCount = 10

function demoFun() {
    const globalCount = 50
    console.log("Demo Function Inner Log",globalCount);
}

// demoFun()

// console.log(globalCount);







let val = 100

function letFun() {
    // let val = 200
    val = 200
    console.log("Let Function Inner Log",val);
}

// letFun()
// console.log(val);








// this keyword

const newVal = "Sagnik Biswas"

const thisFun=()=> {
    const myval = "This Function Value"

    console.log(this.myval);
}
thisFun()
console.log(this);




