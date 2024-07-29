


const input ={
    A : (a,b,c) => a + b + c,
    B : (a,b,c) => a - b - c,
    C: (a,b,c) => a * b - c,
    D : {
        E : (a,b,c) => a * b * c
    }
}

function compute(input, a,b,c){
    const temp = {};
    for(let i in input){
        const key = input[i]
        if(typeof key === 'object'){
            temp[i] = compute(key,a,b,c)
        }else{
            const value = key(a,b,c)
            temp[i] = value
        }
    }
    return temp
}

console.log(compute(input,1,1,1))