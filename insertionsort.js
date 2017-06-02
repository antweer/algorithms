//Implementing an insertion sort algorithm in JS 
var a = [10, 2, 4, 6, 7, 3, 9 , 1, 5, 8];

function insertionSort(items){
  var len = items.length,
      value,
      i,
      j 
      
  
  for(i=0; i< len; i++){
    value = items[i];
    for(j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }
    items[j+1] = value;
    console.log(items);
  }
  return items;
}

insertionSort(a);
