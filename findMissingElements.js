
function missingArray(arr){

    let res = [];
    let n = Math.max(...arr)

    for(let i = 1 ; i <= n ; i++){
        if(!arr.includes(i)){
            res.push(i)
        }
    }
    return res
}

console.log(missingArray([1,3,4,5,7,9,12]))