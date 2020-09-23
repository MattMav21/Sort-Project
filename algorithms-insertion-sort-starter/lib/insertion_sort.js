function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let valueToInsert = list[i]; 
    let holePosition = i; //3
    while(holePosition > 0 && (list[holePosition - 1] > valueToInsert)) {
      list[holePosition] = list[holePosition - 1]; 
      holePosition = holePosition - 1; 
      console.log(list); 
      // holePosition = 0 & [3, 3, 6, 2]; 
      // holePosition = 2 & [3, 3, 6, 6];
    }
    list[holePosition] = valueToInsert;   
    console.log(`step ${i}`, list); 
    // [2, 3, 6, 2];  
  }
}   

let list = [2, 3, 6, 2];
insertionSort(list); 
//   /* select value to be inserted */
//   valueToInsert = list[i]
//   holePosition = i

//   /* locate hole position for the element to be inserted */
//                                      3                     2
//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
//                        =       3
//     list[holePosition] = list[holePosition-1]
//                            0
//     holePosition = holePosition -1
//   end while

//   /* insert the number at hole position */
//   list[holePosition] = valueToInsert

// end for


//array = [3, 2, 6, 2]
// holeposition = 1 & valueToInsert = 2

module.exports = {
  insertionSort
};
