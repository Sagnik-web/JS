const pl = ["Python","Javascript","Java","C++","C"]


// pl.forEach(el=>console.log(el))

const newval = pl.forEach(el=>el)

// console.log(newval);

const obj = [
    {
        name:"SB",
        roll:7
    },
    {
        name:"BBC",
        roll:10
    },
    {
        name:"SB",
        roll:45
    }
]

obj.forEach(el=>console.log(el.name," ",el.roll))