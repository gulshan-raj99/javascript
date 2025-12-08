function nonRepeating(str){    
    for(let i=0; i<str.length;i++){
        let count = 0;
        for(let j=0; j<str.length;j++){
            if(str[j]===str[i]){
                count++;
            } 
        }
        if(count ===1){
            return str[i];
        }    
    }
    return null;
}
console.log(nonRepeating("aabbcddee"));

// 2nd way
function NonRepeating(str){
    for(let i=0; i< str.length; i++){
        let found = false;
        let ch = str[i];
        for(let j=0; j<str.length;j++){
            if(i !==j && ch===str[j]){
                found = true;
                break;
            }
        }
        if(!found){
          return ch;
        }

    }
    return null;
}
console.log(NonRepeating("aabbcddee"));