
function pivot(arr){

    const total = arr.reduce((acc,curr)=> acc + curr,0)
    let leftSum = 0 ;

    for(let i = 0 ; i < arr.length ; i++){

        const rightSum = total - leftSum - arr[i]
        
        if(leftSum === rightSum){
            return i;
        }

        leftSum = leftSum + arr[i]
    }
}

console.log(pivot([1,4,2,0,5]))