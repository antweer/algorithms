//Fibonnaci algorithm

//Recursive fibonnaci algorithm
function fibonnaci(num){
  let val = 0;
  if(num === 0){
    return val;
  }
  if(num == 1){
    return val + num;
  }
  return fibonnaci(num-1) + fibonnaci(num-2);
}

