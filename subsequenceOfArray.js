

function check(num){

   let temp = [];
   let result = [];
   
   function recurssive(num,i){
           if(i === num.length){
               return result.push([...temp])
           }
           temp.push(num[i])
           recurssive(num, i+1)
           temp.pop()
           recurssive(num , i+1)
       }
        recurssive(num, 0)
        return result
   
}
console.log(check([1,2,3]))