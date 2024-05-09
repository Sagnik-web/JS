const num = [1,2,3,4,5,6,7,8,9,10]

const newNum = num.filter(el=>el>4)

const newVal = num.filter(myFun)

function myFun(item){
    return item>6
}


console.log(newVal);