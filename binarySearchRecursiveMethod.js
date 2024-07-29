
function binarySearch(arr,target){
    
    return binaryUtil(arr,target,0,arr.length-1)

}

function binaryUtil( arr, target, start, end ){

    if(start > end)
        return -1

    let mid = Math.floor((start + end) / 2)

     if(arr[mid] === target){
        
        return mid;

     }
     else if (arr[mid] > target){
        return binaryUtil(arr, target, start, mid-1)
     }
     else {
        return binaryUtil(arr, target, mid + 1 , end)
     }
}

console.log(binarySearch([1,4,6,9,12,15], 12))