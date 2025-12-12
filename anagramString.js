// check string is anagram or not
// -> two string are anagrams if they contain same chracters.

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent'));

function anagram(str1, str2){
    if(str1.length === str2.length){
        return true;
    }
    let freq1 = {};
    let freq2 = {};
    
    for(let i =0; i<str1.length;i++){
        let ch = str[i];
        if(freq1[ch]){
            freq1[ch]++;
        } else {
            freq1[ch]=1;
        }
    }
    
    for(let j =0; j<str2.lenth;j++){
        let ch = str[j];
        if(freq2[ch]){
            freq2[ch]++;
        } else {
            freq2 = 1;
        }
    }
    for(let key in freq1){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}
console.log(anagram("silent", "listen"));