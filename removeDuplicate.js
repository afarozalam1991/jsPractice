function removeDulicateElement(){
  var originalArray=[];
  const length=arguments.length;
  for(let i=0;i<length;i++){
    if(originalArray.indexOf(arguments[i])===-1){
originalArray.push(arguments[i]);
    }
  }
return originalArray;
}
removeDulicateElement(1, 123, 500, 115, 123, 44, 500,88);
