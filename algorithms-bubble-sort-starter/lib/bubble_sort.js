function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  let n = array.length; 
  let swapped = true; 

  while (swapped) {
    swapped = false; 
    for (let i =1; i < n; i++) {
      let element = array[i];
      if (array[i-1] > element) {
        array[i] = array[i-1]; 
        array[i-1] = element; 
        //swap(array, element, array[i-1]); 
        swapped = true;
        console.log(`this is round ${i}`, array)
        break;  
      } 
    }
  }

  // n := length(array)
  // repeat
  //  swapped = false
  //  for i := 1 to n - 1 inclusive do
  //
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  //
  //     end if
  //   end for
  // until not swapped
}


module.exports = {
  bubbleSort,
  swap
};
