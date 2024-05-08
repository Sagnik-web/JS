const singleParamFun =(name)=>{
    console.log(`My name is ${name}`);
}

singleParamFun("Sagnik Biswas","SB")


const paramFun =(num1,num2,...num)=>{
    console.log(num1,num2,num);
}

paramFun(10,20,30,40,50,60)


const fun =(name,val="Student")=>{
    console.log(name,val);
}

fun("Sagnik Biswas")



