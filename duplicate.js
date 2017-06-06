var a = [10, 1, 3, 5, 6, 8, 2, 5, 9];

function dupCheck(arr){
  let dict = {};
  let dups = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] in dict){
      if(dups.indexOf(i) == -1){
        dups.push(arr[i]);
      }else{
        continue;
      }
    }else{
      dict[arr[i]] = 1;
    }
  }
  return dups;
}

dupCheck(a);