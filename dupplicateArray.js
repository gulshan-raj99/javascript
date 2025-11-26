const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,4,4,5,6,7,8]));

const removeDup = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(removeDup([1, 2, 2, 3, 4, 4, 5]));
