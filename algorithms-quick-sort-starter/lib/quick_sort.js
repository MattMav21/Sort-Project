function quickSort(array) {
  if (array.length <= 1) return array; 

  let pivot = array.shift();
  let left = [];
  let right = [];

  array.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el); 
    }
  });
  
  let leftSorted = quickSort(left); 
  let rightSorted = quickSort(right); 
  
  return [...leftSorted, pivot, ...rightSorted];
}

module.exports = {
  quickSort
};
