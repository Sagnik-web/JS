const num = [1,2,3,4,5,6,7,8,9,10]

const val = num.map(el=>el*10)
                .map(el=>el+10)
                .filter(el=>el>44)

console.log(val);