
function checkTarget(arr,target){
  let obj={};
  
  for(let i =0; i<arr.length;i++){
  const  currentItem = target - arr[i]
    if(obj[currentItem] >= 0){
        return [obj[currentItem], i]
    }
    else {
        obj[arr[i]] = i
    }
  }
  return -1
}
console.log(checkTarget([2,7,5,1],9));