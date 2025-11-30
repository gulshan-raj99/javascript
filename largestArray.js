const SecondLargest = (arr) => {
    if(arr.length < 2) return null;

  let largest = arr[0];
  let second = arr[1];
  
  if(second > largest) {
      let temp = largest;
      largest = second;
      second = temp;
  }
  for (let i = 2; i< arr.length; i++) {
      let num = arr[i];
      
      if(num > largest) {
          second = largest;
          largest = num;
      } else if (num > second && num !== largest) {
          second = num;
      }
  }
  return second;
}

console.log(SecondLargest([2,3,45,67,44,57]));

function secondElement(arr){

    let unique = [...new Set(arr)];

    // sort descending
    unique.sort((a, b) => b -a);
    
    return unique[1];
}
console.log(secondElement([10,20,45,60,26]));

const large = (arr) => {
    let unique = [... new Set(arr)];
    unique.sort((a,b) => b-a);
    return unique[0];
}
console.log(large([22,44,55,11,66,47]));

const third = (arr) => {
    let unique = [... new Set(arr)];
    unique.sort((a,b) => b-a);
    return unique[2];
}
console.log(third([22,45,66,25,11]));