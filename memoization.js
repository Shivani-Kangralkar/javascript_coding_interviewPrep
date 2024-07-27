


const sum = (a,b)=>{
    return a + b
}

function memo(fn){

    const cache = {};
    return function(...args){

        const key = args.join(",")
        if(cache[key]){
            console.log("feteched value from cache", key)
            return cache[key]
        }else{
            const result = fn.apply(this,args)
            cache[key] = result
            return result
        }

    }

}

const result = memo(sum);
console.log(result(2,2))
console.log(result(2,3))