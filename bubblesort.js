//My JS Bubble Sort Algorithm
var a = [10, 2, 4, 6, 7, 3, 9 , 1, 5, 8];
 
function bubbleSort(array)
{
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        var temp = a[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
 
bubbleSort(a);
console.log(a);

//Bonus algorithm for drawing a right triangle of any size
function triangle(size){
    for(let i = 0; i<size; i++){
        console.log(' '.repeat(i) + '*'.repeat(size-i));
    }
}