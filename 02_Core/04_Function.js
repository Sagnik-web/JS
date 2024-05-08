
// abc()

function abc(){
    console.log("Inner Function ABC");
}

// abc()



// xyz()                                       // IN this type of function we need to define function first
const xyz = function(){
    console.log("Inner Function XYZ");
}

// xyz()




// arrowFun()                                      // IN this type of function we need to define function first
const arrowFun = ()=>{
    console.log("Arrow Function Called");
}

// arrowFun()







// Uses of Arrow Func

const difFun = (val)=> 
    ({
        1:val,
        2:'b',
        3:'c'
    })
console.log(difFun('SB'));

const sum = (num1,num2)=> num1+num2
console.log(sum(10,50));













