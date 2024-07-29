
function findProduct(arr){

    let sortedArray = arr.sort((a,b)=> a < b ? -1 : 1)
    let duplicateRemove = [...new Set(sortedArray)]
    let lastItem = duplicateRemove.slice(-3)
    const result = lastItem.reduce((acc,curr)=> acc * curr, 1)
    return result

}
console.log(findProduct([1,4,12,10,-2,-4,-18,5,10,-3]))