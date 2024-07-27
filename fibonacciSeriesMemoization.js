
function fiboMemo(){
    const cache = {};
    function fibo(n){
        if(n in cache){
            return cache[n]
        }else{
            if(n <= 1){
                return n
            }else{
                cache[n] = fibo(n - 1) + fibo(n - 2)
                return cache[n]
            }
        }
    }
    return fibo
}

const fiboResult = fiboMemo()
console.log(fiboResult(0))
console.log(fiboResult(1))
console.log(fiboResult(2))
console.log(fiboResult(3))
console.log(fiboResult(4))
console.log(fiboResult(5))