//Fibonnaci algorithm
function fibonnaci(num){
  temp = 0;
  post = 0;
  val = 1;
  for(i=0; i<=num; i++){
    fib = post;
    post = val;
    val += fib;
  }
  return fib;
}
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

//Bonus recursive exponential function
function exp(num, pwr){
  if(pwr === 0) return 1;
  return num*exp(num, pwr-1);
}

//Bonus X*Y 
function mult(x,y){
  let val = 0;
  for(let i=1; i<=y; i++){
    val += x;
  }
  return val;
}