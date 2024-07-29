
function isIPV4(str){

    const parts = str.split('.')

    if(parts.length !== 4){
        return false
    }

    for(let i of parts){
        
        const num = parseInt( i, 10)
        if(isNaN(num) || num < 0 || num > 255){
            return false
        }

        if(num.toString() !== i){
            return false
        }
    }
    return true
}

// console.log(isIPV4('192.168.0.222'))
// console.log(isIPV4('256.0.0.0'))
// console.log(isIPV4('192.168.0.abc'))
// console.log(isIPV4('192.168.0.1.1'))
console.log(isIPV4('0.0.0.0'))