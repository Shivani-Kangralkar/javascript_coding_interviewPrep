
function checker(arr,k){

    let sum = 0;
    let max = 0;
    let mapStore = new Map();

    for(let i = 0 ;i < arr.length ; i++){
        sum = sum + arr[i];

        if(sum === k){
            max = i + 1;
        }

        if(mapStore.has(sum-k)){
            max = Math.max(max, i - mapStore.get(sum-k))
        }

        if(!mapStore.has(sum)){
           mapStore.set(sum,i) 
        }

    }
    return  max
}

console.log(checker([10,5,2,7,1,4], 15))