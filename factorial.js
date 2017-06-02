//Factorial algorithm
function fac(num){
  let val = 1;
  if(num === 0){
    return val;
  }
  for(let i = num; i>0; i--){
    val *= i;
  }
  return val;
}

//Recursive factorial algorithm
function factorial(x){
  if( x === 0 ){
    return 1;
  }
  return x*factorial(x-1);
}