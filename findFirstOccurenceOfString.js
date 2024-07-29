
function firstOccurence(str1, str2){

    let m = str1.length;
    let n = str2.length;
    let value = m - n;


    for(let i = 0; i <= value ; i++){
        let flag = true;
        for(let j = 0 ; j < n ; j++){
            if(str1[i+j] !== str2[j]){
                flag = false;
                break;
            }
        }

        if(flag){
            return i
        }
    }
    return -1
}

console.log(firstOccurence("sadbutsad", "sad"))